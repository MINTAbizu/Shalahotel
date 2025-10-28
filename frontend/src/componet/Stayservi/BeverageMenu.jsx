import React, { useMemo, useState } from 'react';
import {
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  TextField,
  Chip,
  IconButton,
  Badge,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Stack,
} from '@mui/material';
import LocalCafeIcon from '@mui/icons-material/LocalCafe';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const SAMPLE_BEVERAGES = [
  {
    id: '1',
    name: 'Cappuccino',
    description: 'Rich espresso topped with steamed milk foam.',
    price: 4.5,
    category: 'Coffee',
    calories: 120,
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=800&auto=format&fit=crop',
  },

  {
    id: '2',
    name: 'Iced Latte',
    description: 'Smooth espresso with milk and ice — perfect for warm days.',
    price: 4.75,
    category: 'Coffee',
    calories: 140,
    image: 'https://images.unsplash.com/photo-1527169402691-ae3e3e2e4b36?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '3',
    name: 'Green Smoothie',
    description: 'Blend of spinach, banana, and almond milk.',
    price: 5.25,
    category: 'Smoothies',
    calories: 210,
    image: 'https://images.unsplash.com/photo-1576402187878-974f70c890a5?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '4',
    name: 'Lemonade',
    description: 'Freshly squeezed lemons, sugar, and a hint of mint.',
    price: 3.25,
    category: 'Juice',
    calories: 150,
    image: 'https://images.unsplash.com/photo-1561043433-aaf687c4cf4e?q=80&w=800&auto=format&fit=crop',
  },
  // 
  {
    id: '5',
    name: 'Iced Tea',
    description: 'Chilled black tea with lemon and honey.',
    price: 3.75,
    category: 'Tea',
    calories: 90,
    image: 'https://images.unsplash.com/photo-1510626176961-4b37d0f0b987?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '6',
    name: 'Hot Chocolate',
    description: 'Creamy and rich cocoa topped with whipped cream.',
    price: 4.0,
    category: 'Chocolate',
    calories: 200,
    image: 'https://images.unsplash.com/photo-1607083206968-13611e3b7c4a?q=80&w=800&auto=format&fit=crop',
  },
];

export default function BeverageMenu() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');
  const [sort, setSort] = useState('popular');
  const [cart, setCart] = useState({});

  const categories = useMemo(() => {
    const set = new Set(SAMPLE_BEVERAGES.map((i) => i.category));
    return ['All', ...Array.from(set)];
  }, []);

  const filtered = useMemo(() => {
    let items = SAMPLE_BEVERAGES.filter(
      (it) =>
        it.name.toLowerCase().includes(query.toLowerCase()) ||
        it.description.toLowerCase().includes(query.toLowerCase())
    );
    if (category !== 'All') items = items.filter((it) => it.category === category);

    if (sort === 'price-asc') items.sort((a, b) => a.price - b.price);
    else if (sort === 'price-desc') items.sort((a, b) => b.price - a.price);
    else if (sort === 'calories-asc') items.sort((a, b) => a.calories - b.calories);

    return items;
  }, [query, category, sort]);

  const add = (id) => setCart((c) => ({ ...c, [id]: (c[id] || 0) + 1 }));
  const remove = (id) => setCart((c) => {
    const copy = { ...c };
    if (!copy[id]) return copy;
    copy[id] -= 1;
    if (copy[id] <= 0) delete copy[id];
    return copy;
  });

  const cartCount = Object.values(cart).reduce((s, n) => s + n, 0);
  const cartTotal = Object.entries(cart).reduce((sum, [id, qty]) => {
    const item = SAMPLE_BEVERAGES.find((i) => i.id === id);
    return sum + (item ? item.price * qty : 0);
  }, 0);

  return (
    <Box sx={{ p: { xs: 2, md: 4 } }}>
      <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} alignItems="center" justifyContent="space-between" sx={{ mb: 3 }}>
        <Stack direction="row" spacing={1} alignItems="center">
          <LocalCafeIcon fontSize="large" />
          <div>
            <Typography variant="h5">Beverage Menu</Typography>
            <Typography variant="body2" color="text.secondary">Refreshing drinks and hot brews — made to energize your day.</Typography>
          </div>
        </Stack>

        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1} alignItems="center">
          <TextField size="small" placeholder="Search beverages..." value={query} onChange={(e) => setQuery(e.target.value)} />

          <FormControl size="small" sx={{ minWidth: 140 }}>
            <InputLabel id="sort-label">Sort</InputLabel>
            <Select labelId="sort-label" value={sort} label="Sort" onChange={(e) => setSort(e.target.value)}>
              <MenuItem value={'popular'}>Popular</MenuItem>
              <MenuItem value={'price-asc'}>Price: low → high</MenuItem>
              <MenuItem value={'price-desc'}>Price: high → low</MenuItem>
              <MenuItem value={'calories-asc'}>Calories: low → high</MenuItem>
            </Select>
          </FormControl>

          <IconButton aria-label="cart" size="large">
            <Badge badgeContent={cartCount} color="primary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Stack>
      </Stack>

      <Box sx={{ mb: 2 }}>
        <Stack direction="row" spacing={1} flexWrap="wrap">
          {categories.map((c) => (
            <Chip key={c} label={c} clickable onClick={() => setCategory(c)} variant={c === category ? 'filled' : 'outlined'} />
          ))}
        </Stack>
      </Box>

      <Grid container spacing={2}>
        {filtered.map((item) => (
          <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardMedia component="img" height="160" image={item.image} alt={item.name} />

              <CardContent sx={{ flexGrow: 1 }}>
                <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
                  <div>
                    <Typography variant="h6">{item.name}</Typography>
                    <Typography variant="body2" color="text.secondary">{item.description}</Typography>
                  </div>

                  <div style={{ textAlign: 'right' }}>
                    <Typography variant="subtitle1">${item.price.toFixed(2)}</Typography>
                    <Typography variant="caption" color="text.secondary">{item.calories} kcal</Typography>
                  </div>
                </Stack>
              </CardContent>

              <CardActions sx={{ justifyContent: 'space-between', px: 2, pb: 2 }}>
                <Button size="small" startIcon={<StarBorderIcon />}>Details</Button>
                <Stack direction="row" spacing={1} alignItems="center">
                  <IconButton size="small" onClick={() => remove(item.id)} aria-label="remove">
                    <RemoveIcon />
                  </IconButton>
                  <Typography>{cart[item.id] || 0}</Typography>
                  <IconButton size="small" onClick={() => add(item.id)} aria-label="add">
                    <AddIcon />
                  </IconButton>
                </Stack>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ position: 'fixed', right: 20, bottom: 20 }}>
        <Card sx={{ minWidth: 220, p: 1 }}>
          <CardContent>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
              <div>
                <Typography variant="subtitle2">Order summary</Typography>
                <Typography variant="body2" color="text.secondary">{cartCount} item(s)</Typography>
              </div>
              <div style={{ textAlign: 'right' }}>
                <Typography variant="h6">${cartTotal.toFixed(2)}</Typography>
                <Typography variant="caption" color="text.secondary">incl. taxes</Typography>
              </div>
            </Stack>

            <Box sx={{ mt: 1, textAlign: 'center' }}>
              <Button variant="contained" size="small" disabled={cartCount === 0}>Checkout</Button>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}
