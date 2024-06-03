import Map from "ol/Map.js";
import React, { useEffect } from "react";

import "./Map.css";
import TileLayer from "ol/layer/Tile";
import { OSM } from "ol/source";
import { View } from "ol";
import { useGeographic } from "ol/proj";
interface Props {
	className?: string;
	style?: React.CSSProperties;
	center: {
		lat: number;
		lng: number;
	};
	zoom: number;
}

const MapComponent = ({ className, style, center, zoom }: Props) => {
	useGeographic();
	useEffect(() => {
		const osmLayer = new TileLayer({
			preload: Infinity,
			source: new OSM(),
		});

		const map = new Map({
			target: "map",
			layers: [osmLayer],
			view: new View({
				center: [center.lng, center.lat],
				zoom,
			}),
		});

		return () => {
			map.setTarget(undefined);
		};
	}, [center, zoom]);

	return <div className={`map ${className}`} style={style} id="map"></div>;
};

export default MapComponent;
