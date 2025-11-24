# Connecting to the Backend

This document provides instructions on how to connect the Mali Hue frontend to a backend API.

## Environment Variables

To connect to the backend, you need to create a `.env.local` file in the root of the project and add the following environment variable:

```
NEXT_PUBLIC_API_URL=http://your-backend-api-url.com/api
```

Replace `http://your-backend-api-url.com/api` with the actual URL of your backend API.

## API Usage

The frontend will then use this URL to make API requests. For example, in the `ItemsTab.js` component, you can fetch the items from the backend like this:

```javascript
'use client';
import React, { useState, useEffect } from 'react';
import { mc_Alexandria400, mc_Alexandria600 } from '@/utils/fonts';

export default function ItemsTab() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/items`);
      const data = await res.json();
      setItems(data);
    };
    fetchItems();
  }, []);

  // ... rest of the component
}
```

## Authentication

For authenticated requests, you will need to handle user login and store the authentication token (e.g., in local storage or a cookie). Then, you can include the token in the headers of your API requests.
