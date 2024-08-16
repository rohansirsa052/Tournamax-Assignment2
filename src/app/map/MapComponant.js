// components/MapComponent.js

import dynamic from 'next/dynamic';

// Dynamically import the MapComponent and disable SSR
const MapComponent = dynamic(() => import('../map2/MapComponentContent'), { ssr: false });

export default MapComponent;
