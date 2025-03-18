
/// <reference types="vite/client" />

// Google Maps type definitions
interface Window {
  google?: {
    maps: {
      Map: any;
      Marker: any;
      LatLngBounds: any;
      SymbolPath: {
        CIRCLE: any;
      };
      NavigationControl: any;
    }
  }
}
