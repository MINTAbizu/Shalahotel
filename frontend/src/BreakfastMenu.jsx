// frontend/src/components/BreakfastMenu.jsx
import React, { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
/* MUI imports same as before... */
import {
  Box, Grid, Card, CardMedia, CardContent, CardActions, Typography, Button,
  TextField, Chip, IconButton, Badge, MenuItem, Select, FormControl, InputLabel, Stack
} from '@mui/material';
import BreakfastDiningIcon from '@mui/icons-material/BreakfastDining';
import LocalCafeIcon from '@mui/icons-material/LocalCafe';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

export default function BreakfastMenu() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');
  const [sort, setSort] = useState('popular');
  const [cart, setCart] = useState({});
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch items from backend
  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/items'); // GET /api/items
        // Map backend fields to UI (ensure you have id or _id)
        const mapped = res.data.map(it => ({
          id: it._id,
          name: it.name,
          description: it.description || it.category || '',
          price: it.cost,
          category: it.category || 'Other',
          calories: it.calories || 0,
          vegetarian: it.vegetarian || false,
          image: it.image || 'https://via.placeholder.com/300',
        }));
        setItems(mapped);
      } catch (err) {
        console.error('Error fetching items', err);
      } finally {
        setLoading(false);
      }
    };
    fetch();
  }, []);

  const categories = useMemo(() => {
    const set = new Set(items.map((i) => i.category));
    return ['All', ...Array.from(set)];
  }, [items]);

  const filtered = useMemo(() => {
    let list = items.filter(
      (it) =>
        it.name.toLowerCase().includes(query.toLowerCase()) ||
        it.description.toLowerCase().includes(query.toLowerCase())
    );
    if (category !== 'All') list = list.filter((it) => it.category === category);
    if (sort === 'price-asc') list.sort((a, b) => a.price - b.price);
    else if (sort === 'price-desc') list.sort((a, b) => b.price - a.price);
    else if (sort === 'calories-asc') list.sort((a, b) => a.calories - b.calories);
    return list;
  }, [items, query, category, sort]);

  const add = (id) => setCart(c => ({ ...c, [id]: (c[id] || 0) + 1 }));
  const remove = (id) => setCart(c => {
    const copy = { ...c };
    if (!copy[id]) return copy;
    copy[id] -= 1;
    if (copy[id] <= 0) delete copy[id];
    return copy;
  });

  const cartCount = Object.values(cart).reduce((s, n) => s + n, 0);
  const cartTotal = Object.entries(cart).reduce((sum, [id, qty]) => {
    const item = items.find(i => i.id === id);
    return sum + (item ? item.price * qty : 0);
  }, 0);

  // Checkout: build order payload and send to backend
  const handleCheckout = async () => {
    if (cartCount === 0) return alert('Cart is empty');

    const orderItems = Object.entries(cart).map(([id, qty]) => {
      const item = items.find(i => i.id === id);
      return {
        itemId: id,
        name: item.name,
        price: item.price,
        quantity: qty,
      };
    });

    const orderPayload = {
      // userId: user?.id (if you have auth)
      items: orderItems,
      totalAmount: cartTotal,
    };

    try {
      // If you have a JWT, attach: { headers: { Authorization: `Bearer ${token}` } }
      const res = await axios.post('http://localhost:5000/api/orders/create', orderPayload);
      alert('Order placed! Order ID: ' + res.data.order._id);
      setCart({}); // clear cart
    } catch (err) {
      console.error('Checkout error', err);
      alert(err?.response?.data?.message || 'Failed to place order');
    }
  };

  if (loading) return <div>Loading menu...</div>;

  return (
    <Box sx={{ p: 3 }}>
      {/* Top bar, search, cart badge — same as before */}
      <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
        <Stack direction="row" spacing={1} alignItems="center">
          <BreakfastDiningIcon fontSize="large" />
          <div>
            <Typography variant="h5">Breakfast Menu</Typography>
            <Typography variant="body2" color="text.secondary">Start your day right.</Typography>
          </div>
        </Stack>
        <Stack direction="row" spacing={1} alignItems="center">
          <TextField size="small" placeholder="Search..." value={query} onChange={(e) => setQuery(e.target.value)} />
          <FormControl size="small" sx={{ minWidth: 120 }}>
            <InputLabel id="sort-label">Sort</InputLabel>
            <Select labelId="sort-label" value={sort} label="Sort" onChange={(e) => setSort(e.target.value)}>
              <MenuItem value="popular">Popular</MenuItem>
              <MenuItem value="price-asc">Price low→high</MenuItem>
              <MenuItem value="price-desc">Price high→low</MenuItem>
            </Select>
          </FormControl>
          <IconButton aria-label="cart">
            <Badge badgeContent={cartCount} color="primary">
              <LocalCafeIcon />
            </Badge>
          </IconButton>
        </Stack>
      </Stack>

      {/* categories */}
      <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
        {categories.map(c => (
          <Chip key={c} label={c} clickable onClick={() => setCategory(c)} variant={c === category ? 'filled' : 'outlined'} />
        ))}
      </Stack>

      {/* items grid */}
      <Grid container spacing={2}>
        {filtered.map(item => (
          <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
            <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <CardMedia component="img" height="140" image={item.image} alt={item.name} />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6">{item.name}</Typography>
                <Typography variant="body2" color="text.secondary">{item.description}</Typography>
                <Typography variant="subtitle1">${item.price.toFixed(2)}</Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: 'space-between' }}>
                <Button size="small" startIcon={<StarBorderIcon />}>Details</Button>
                <Stack direction="row" spacing={1} alignItems="center">
                  <IconButton size="small" onClick={() => remove(item.id)}><RemoveIcon /></IconButton>
                  <Typography>{cart[item.id] || 0}</Typography>
                  <IconButton size="small" onClick={() => add(item.id)}><AddIcon /></IconButton>
                </Stack>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* floating order summary */}
      <Box sx={{ position: 'fixed', right: 20, bottom: 20 }}>
        <Card sx={{ minWidth: 240, p: 1 }}>
          <CardContent>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
              <div>
                <Typography variant="subtitle2">Order summary</Typography>
                <Typography variant="body2">{cartCount} item(s)</Typography>
              </div>
              <div>
                <Typography variant="h6">${cartTotal.toFixed(2)}</Typography>
              </div>
            </Stack>
            <Box sx={{ mt: 1, textAlign: 'center' }}>
              <Button variant="contained" onClick={handleCheckout} disabled={cartCount === 0}>Checkout</Button>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}
