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
import BreakfastDiningIcon from '@mui/icons-material/BreakfastDining';
import LocalCafeIcon from '@mui/icons-material/LocalCafe';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

// Single-file reusable Material UI breakfast menu component
// - Responsive grid of breakfast items
// - Search, category filter chips, sort select
// - Simple cart state with quantity controls

const SAMPLE_ITEMS = [
  {
    id: '1',
    name: 'Avocado Toast',
    description: 'Sourdough, smashed avocado, chili flakes, lemon.',
    price: 7.5,
    category: 'Toast',
    calories: 320,
    vegetarian: true,
    image:
      'https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=2f8d6f5a7a9d6c4d5f1a6d6a8b7c4e2f',
  },
  {
    id: '2',
    name: 'Blueberry Pancakes',
    description: 'Stack of fluffy pancakes with fresh blueberries.',
    price: 9.0,
    category: 'Pancakes',
    calories: 560,
    vegetarian: true,
    image:
      'https://images.unsplash.com/photo-1585238342028-7c72b5b3b9d8?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=5a1f1c2b6c3d4e5f6a7b8c9d0e1f2a3b',
  },
  {
    id: '3',
    name: 'Eggs Benedict',
    description: 'Poached eggs, hollandaise, English muffin.',
    price: 11.25,
    category: 'Eggs',
    calories: 610,
    vegetarian: false,
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=9a7d3d6f3b2c1a0b4e5d6f7a8b9c0d1e',
  },
  {
    id: '4',
    name: 'Greek Yogurt Bowl',
    description: 'Greek yogurt, honey, granola, seasonal fruit.',
    price: 6.75,
    category: 'Bowls',
    calories: 290,
    vegetarian: true,
    image:
      'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=1f2e3d4c5b6a7d8c9e0f1a2b3c4d5e6f',
  },
  {
    id: '5',
    name: 'Full Breakfast',
    description: 'Eggs, bacon, sausage, beans, grilled tomato, toast.',
    price: 13.5,
    category: 'Full',
    calories: 950,
    vegetarian: false,
    image:
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e',
  },
];

export default function BreakfastMenu() {
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
    // 'popular' leaves sample order

    return items;
  }, [query, category, sort]);

  const add = (id) => {
    setCart((c) => ({ ...c, [id]: (c[id] || 0) + 1 }));
  };
  const remove = (id) => {
    setCart((c) => {
      const copy = { ...c };
      if (!copy[id]) return copy;
      copy[id] = copy[id] - 1;
      if (copy[id] <= 0) delete copy[id];
      return copy;
    });
  };

  const cartCount = Object.values(cart).reduce((s, n) => s + n, 0);
  const cartTotal = Object.entries(cart).reduce((sum, [id, qty]) => {
    const item = SAMPLE_ITEMS.find((i) => i.id === id);
    return sum + (item ? item.price * qty : 0);
  }, 0);

  return (
    <Box sx={{ p: { xs: 2, md: 4 } }}>
      <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} alignItems="center" justifyContent="space-between" sx={{ mb: 3 }}>
        <Stack direction="row" spacing={1} alignItems="center">
          <BreakfastDiningIcon fontSize="large" />
          <div>
            <Typography variant="h5">Breakfast Menu</Typography>
            <Typography variant="body2" color="text.secondary">Start your day right — browse our breakfast selection.</Typography>
          </div>
        </Stack>

        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1} alignItems="center">
          <TextField
            size="small"
            placeholder="Search breakfast..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />

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
              <LocalCafeIcon />
            </Badge>
          </IconButton>
        </Stack>
      </Stack>

      <Box sx={{ mb: 2 }}>
        <Stack direction="row" spacing={1} flexWrap="wrap">
          {categories.map((c) => (
            <Chip
              key={c}
              label={c}
              clickable
              onClick={() => setCategory(c)}
              variant={c === category ? 'filled' : 'outlined'}
            />
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
                    <Typography variant="body2" color="text.secondary">
                      {item.description}
                    </Typography>
                  </div>

                  <div style={{ textAlign: 'right' }}>
                    <Typography variant="subtitle1">${item.price.toFixed(2)}</Typography>
                    <Typography variant="caption" color="text.secondary">
                      {item.calories} kcal
                    </Typography>
                  </div>
                </Stack>

                <Box sx={{ mt: 1 }}>
                  {item.vegetarian && <Chip size="small" label="Vegetarian" sx={{ mr: 1 }} />}
                  {!item.vegetarian && <Chip size="small" label="Contains meat" sx={{ mr: 1 }} />}
                </Box>
              </CardContent>

              <CardActions sx={{ justifyContent: 'space-between', px: 2, pb: 2 }}>
                <div>
                  <Button size="small" startIcon={<StarBorderIcon />}>Details</Button>
                </div>

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
