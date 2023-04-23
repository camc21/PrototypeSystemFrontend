import { Fragment } from 'react';
import Map from '../../components/map';
import SplitPane, { Panel } from 'react-split-pane';


import styles from '../../styles/map.module.css';



const SAOJOSEDOSCAMPOS_CENTER = [ -23.21854, -45.89357]
const JACAREI_CENTER = [-23.30659, -45.97172]
const CACAPAVA_CENTER = [-23.10412, -45.70674]
const TAUBATE_CENTER = [-23.02499, -45.56394]

export default function Home() {
  return (
    <Fragment>
      <SplitPane split='vertical'>
        <SplitPane split="horizontal">
          <Map className={styles.homeMap} center={SAOJOSEDOSCAMPOS_CENTER} zoom={8}>
            {({ TileLayer, Marker, Popup }) => (
              <>
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={SAOJOSEDOSCAMPOS_CENTER}>
                  <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                  </Popup>
                </Marker>
              </>
            )}
          </Map>
          <Map className={styles.homeMap} center={JACAREI_CENTER} zoom={8}>
            {({ TileLayer, Marker, Popup }) => (
              <>
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={JACAREI_CENTER}>
                  <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                  </Popup>
                </Marker>
              </>
            )}
          </Map>
        </SplitPane>
        <SplitPane split="horizontal">
          <Map className={styles.homeMap} center={CACAPAVA_CENTER} zoom={8}>
            {({ TileLayer, Marker, Popup }) => (
              <>
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={CACAPAVA_CENTER}>
                  <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                  </Popup>
                </Marker>
              </>
            )}
          </Map>
          <Map className={styles.homeMap} center={TAUBATE_CENTER} zoom={8}>
            {({ TileLayer, Marker, Popup }) => (
              <>
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={TAUBATE_CENTER}>
                  <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                  </Popup>
                </Marker>
              </>
            )}
          </Map>
        </SplitPane>

      </SplitPane>



      {/* <div style={{ position: "relative", display: "flex", width: "100%", height: "50%", overflow: "auto" }}>

        <div id='map3' style={{ backgroundColor: "blue", position: "relative", width: "100%", height: "100%", overflow: "auto" }}>

        </div>

        <div id='map4' style={{ backgroundColor: "yellow", position: "relative", width: "100%", height: "100%", overflow: "auto" }}>

        </div>

      </div> */}

      {/* <div style={{ position: "relative", display: "flex", width: "100%", height: "50%", overflow:"auto" }}>

        <div id='map1' style={{position: "relative", width: "100%", height: "100%", overflow: "auto", border: "1px solid black"}}>
          <Map className={styles.homeMap} center={SAOJOSEDOSCAMPOS_CENTER} zoom={4}>
            {({ TileLayer, Marker, Popup }) => (
              <>
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={SAOJOSEDOSCAMPOS_CENTER}>
                  <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                  </Popup>
                </Marker>
              </>
            )}
          </Map>
        </div>

        <div id='map2' style={{position: "relative", width: "100%", height: "100%", overflow: "auto", border: "1px solid black"}}>
          <Map className={styles.homeMap} center={SAOJOSEDOSCAMPOS_CENTER} zoom={4}>
            {({ TileLayer, Marker, Popup }) => (
              <>
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={SAOJOSEDOSCAMPOS_CENTER}>
                  <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                  </Popup>
                </Marker>
              </>
            )}
          </Map>
        </div>

      </div>

      <div style={{ position: "relative", display: "flex", width: "100%", height: "50%", overflow:"auto" }}>

        <div id='map3' style={{position: "relative", width: "100%", height: "100%", overflow: "auto", border: "1px solid black"}}>
          <Map className={styles.homeMap} center={SAOJOSEDOSCAMPOS_CENTER} zoom={4}>
            {({ TileLayer, Marker, Popup }) => (
              <>
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={SAOJOSEDOSCAMPOS_CENTER}>
                  <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                  </Popup>
                </Marker>
              </>
            )}
          </Map>
        </div>

        <div id='map4' style={{position: "relative", width: "100%", height: "100%", overflow: "auto", border: "1px solid black"}}>
          <Map className={styles.homeMap} center={SAOJOSEDOSCAMPOS_CENTER} zoom={4}>
            {({ TileLayer, Marker, Popup }) => (
              <>
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={SAOJOSEDOSCAMPOS_CENTER}>
                  <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                  </Popup>
                </Marker>
              </>
            )}
          </Map>
        </div>

      </div> */}

    </Fragment >
  )
}
