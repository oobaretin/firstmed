module.exports=[18622,(a,b,c)=>{b.exports=a.x("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js",()=>require("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js"))},42602,(a,b,c)=>{"use strict";b.exports=a.r(18622)},87924,(a,b,c)=>{"use strict";b.exports=a.r(42602).vendored["react-ssr"].ReactJsxRuntime},72131,(a,b,c)=>{"use strict";b.exports=a.r(42602).vendored["react-ssr"].React},9270,(a,b,c)=>{"use strict";b.exports=a.r(42602).vendored.contexts.AppRouterContext},38783,(a,b,c)=>{"use strict";b.exports=a.r(42602).vendored["react-ssr"].ReactServerDOMTurbopackClient},63519,a=>{"use strict";let b=(0,a.i(70106).default)("phone",[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]]);a.s(["Phone",()=>b],63519)},46842,a=>{"use strict";let b=(0,a.i(70106).default)("user",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);a.s(["User",()=>b],46842)},76472,3314,48464,a=>{"use strict";var b=a.i(70106);let c=(0,b.default)("heart",[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]]);a.s(["Heart",()=>c],76472);let d=(0,b.default)("shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);a.s(["Shield",()=>d],3314);let e=(0,b.default)("car",[["path",{d:"M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2",key:"5owen"}],["circle",{cx:"7",cy:"17",r:"2",key:"u2ysq9"}],["path",{d:"M9 17h6",key:"r8uit2"}],["circle",{cx:"17",cy:"17",r:"2",key:"axvx0g"}]]);a.s(["Car",()=>e],48464)},12976,a=>{"use strict";var b=a.i(87924),c=a.i(72131);function d({center:a,zoom:d=15,className:e=""}){let f=(0,c.useRef)(null);return(0,c.useEffect)(()=>{f.current&&(f.current.innerHTML=`
        <style>
          gmpx-store-locator {
            width: 100%;
            height: 100%;
            --gmpx-color-surface: #fff;
            --gmpx-color-on-surface: #212121;
            --gmpx-color-on-surface-variant: #757575;
            --gmpx-color-primary: #dc2626;
            --gmpx-color-outline: #e0e0e0;
            --gmpx-fixed-panel-width-row-layout: 28.5em;
            --gmpx-fixed-panel-height-column-layout: 65%;
            --gmpx-font-family-base: "Inter", sans-serif;
            --gmpx-font-family-headings: "Inter", sans-serif;
            --gmpx-font-size-base: 0.875rem;
            --gmpx-hours-color-open: #188038;
            --gmpx-hours-color-closed: #d50000;
            --gmpx-rating-color: #ffb300;
            --gmpx-rating-color-empty: #e0e0e0;
          }
        </style>
        
        <script type="module" src="https://ajax.googleapis.com/ajax/libs/@googlemaps/extended-component-library/0.6.11/index.min.js"></script>
        
        <script>
          const CONFIGURATION = {
            "locations": [
              {
                "title": "First Med Care EMS",
                "address1": "11104 W Airport Blvd, Suite 138",
                "address2": "Stafford, TX 77477",
                "coords": {"lat": ${a.lat}, "lng": ${a.lng}},
                "placeId": "ChIJN1t_tDeuQIYRr3a15Vbf0lE",
                "actions": [
                  {
                    "label": "Call",
                    "defaultUrl": "tel:281-690-1274"
                  },
                  {
                    "label": "Email",
                    "defaultUrl": "mailto:24hourserviceems@gmail.com"
                  }
                ]
              }
            ],
            "mapOptions": {
              "center": {"lat": ${a.lat}, "lng": ${a.lng}},
              "fullscreenControl": true,
              "mapTypeControl": false,
              "streetViewControl": false,
              "zoom": ${d},
              "zoomControl": true,
              "maxZoom": 17,
              "mapId": ""
            },
            "mapsApiKey": "${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY||"YOUR_API_KEY_HERE"}",
            "capabilities": {
              "input": false,
              "autocomplete": false,
              "directions": true,
              "distanceMatrix": false,
              "details": true,
              "actions": true
            }
          };

          document.addEventListener('DOMContentLoaded', async () => {
            await customElements.whenDefined('gmpx-store-locator');
            const locator = document.querySelector('gmpx-store-locator');
            if (locator) {
              locator.configureFromQuickBuilder(CONFIGURATION);
            }
          });
        </script>
        
        <gmpx-api-loader 
          key="${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY||"YOUR_API_KEY_HERE"}" 
          solution-channel="GMP_QB_locatorplus_v11_c">
        </gmpx-api-loader>
        <gmpx-store-locator map-id="DEMO_MAP_ID"></gmpx-store-locator>
      `)},[a,d]),(0,b.jsx)("div",{ref:f,className:`w-full h-96 rounded-lg shadow-lg overflow-hidden ${e}`,style:{minHeight:"300px"}})}a.s(["default",()=>d])}];

//# sourceMappingURL=%5Broot-of-the-server%5D__384b2bbe._.js.map