import Head from 'next/head';

import Map from '../../components/map';

import styles from '../../styles/Home.module.css';

const SAOJOSEDOSCAMPOS_CENTER = [-23.223701, -45.9009074]

export default function Home() {
  return (
    <>
      <Map className={styles.homeMap} center={SAOJOSEDOSCAMPOS_CENTER} zoom={4}>
        {({ TileLayer, Marker, Popup }) => (
          <>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            />
            <Marker position={SAOJOSEDOSCAMPOS_CENTER}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </>
        )}
      </Map>
    </>
  )
}
