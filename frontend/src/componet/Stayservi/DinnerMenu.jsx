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
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
import LocalBarIcon from '@mui/icons-material/LocalBar';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const SAMPLE_ITEMS = [
  {
    id: '1',
    name: 'Grilled Salmon',
    description: 'Served with lemon butter sauce and steamed vegetables.',
    price: 18.5,
    category: 'Seafood',
    calories: 480,
    vegetarian: false,
    image:
     'https://images.unsplash.com/photo-1604908812316-9e4a9a65d1c4?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '2',
    name: 'Margherita Pizza',
    description: 'Classic Italian pizza with tomato, mozzarella, and basil.',
    price: 14.0,
    category: 'Pizza',
    calories: 720,
    vegetarian: true,
    image: 'https://images.unsplash.com/photo-1601924582971-d79549835a31?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '3',
    name: 'Steak and Fries',
    description: 'Grilled sirloin steak with crispy golden fries.',
    price: 21.5,
    category: 'Grill',
    calories: 890,
    vegetarian: false,
    image: 'https://images.unsplash.com/photo-1561758033-d89a9ad46330?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '4',
    name: 'Vegetable Stir Fry',
    description: 'Fresh seasonal vegetables in soy-ginger glaze.',
    price: 13.25,
    category: 'Vegan',
    calories: 410,
    vegetarian: true,
    image: 'https://images.unsplash.com/photo-1601050690597-c39d1d3e6e36?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '5',
    name: 'Chicken Alfredo Pasta',
    description: 'Creamy parmesan sauce with grilled chicken and fettuccine.',
    price: 16.75,
    category: 'Pasta',
    calories: 780,
    vegetarian: false,
    image:
     'https://images.unsplash.com/photo-1603133872878-684f98f2b45a?q=80&w=800&auto=format&fit=crop',
  },
];

export default function DinnerMenu() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');
  const [sort, setSort] = useState('popular');
  const [cart, setCart] = useState({});

  const categories = useMemo(() => {
    const set = new Set(SAMPLE_ITEMS.map((i) => i.category));
    return ['All', ...Array.from(set)];
  }, []);

  const filtered = useMemo(() => {
    let items = SAMPLE_ITEMS.filter(
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
    const item = SAMPLE_ITEMS.find((i) => i.id === id);
    return sum + (item ? item.price * qty : 0);
  }, 0);

  return (
    <Box sx={{ p: { xs: 2, md: 4 } }}>
      <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} alignItems="center" justifyContent="space-between" sx={{ mb: 3 }}>
        <Stack direction="row" spacing={1} alignItems="center">
          <DinnerDiningIcon fontSize="large" />
          <div>
            <Typography variant="h5">Dinner Menu</Typography>
            <Typography variant="body2" color="text.secondary">Evening favorites — enjoy our finest dinner selections.</Typography>
          </div>
        </Stack>

        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1} alignItems="center">
          <TextField size="small" placeholder="Search dinner..." value={query} onChange={(e) => setQuery(e.target.value)} />

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
              <LocalBarIcon />
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

                <Box sx={{ mt: 1 }}>
                  {item.vegetarian ? (
                    <Chip size="small" label="Vegetarian" sx={{ mr: 1 }} />
                  ) : (
                    <Chip size="small" label="Contains meat" sx={{ mr: 1 }} />
                  )}
                </Box>
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
