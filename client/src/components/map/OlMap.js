import React, { Component } from 'react'

import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import Overlay from 'ol/Overlay';
import { fromLonLat } from 'ol/proj';

import 'ol/ol.css'

import './OlMap.css'

class OlMap extends Component {
    constructor(props) {
        super(props);

        this.map = null;
    }

    componentDidMount() {
        let map = new Map({
            target: 'map',
            layers: [
                new TileLayer({
                    source: new OSM()
                })
            ],
            view: new View({
                center: [184155.59154146444, 5914986.977433026],
                zoom: 6
            }),
            overlays: []
        });

        this.map = map;
    }

    componentDidUpdate(prevProps) {
        if ((!prevProps.results[0] && this.props.results[0]) || (prevProps.results[0] && prevProps.results[0] && prevProps.results[0].title !== this.props.results[0].title)) {
            var map = this.map;
            map.getOverlays().clear();

            this.props.results.forEach(result => {
                let pos = fromLonLat([result.location.lng, result.location.lat]);
                var element = document.createElement('div');
                element.innerHTML = '<img src="https://cdn.mapmarker.io/api/v1/fa/stack?size=50&color=DC4C3F&icon=fa-microchip&hoffset=1" />';

                var marker = new Overlay({
                    position: pos,
                    positioning: 'center-center',
                    element: element,
                    stopEvent: false
                });

                this.map.addOverlay(marker);
            })
        } else if ((!prevProps.center[0] && this.props.center[0]) || (prevProps.center[0] && prevProps.center[0] !== this.props.center[0])) {
            this.map.getView().setCenter(fromLonLat(this.props.center));
            this.map.getView().setZoom(15);
        }
    }

    render() {
        return (
            <div id="map" >{this.props.children}</div>
        )
    }
}

export default OlMap