import L from 'leaflet';

L.Control.Infobox = L.Control.extend({
  // _elements: {
  //   input: document.createElement('input'),
  //   label: document.createElement('label'),
  //   div: document.createElement('div')
  // },

  onAdd: function(map) {
    var el = this._initLayout('zoom', map.getZoom());
    this.setValue(map.getZoom());

    this._map = map;
    return el;
  },

  _initLayout: function(label) {
    var container = this._container = L.DomUtil.create('div');
    container.appendChild(this._createInfobox(label));

    L.DomEvent.disableClickPropagation(container);
    return container;
  },

  // onRemove: function(map) {
  //   // L.DomUtil.empty(this._elements.container);
  //   // L.DomUtil.remove(this._elements.container);
  // },

  setValue: function(val) {
    // this._elements.input.setAttribute('value', val);
    this._container.getElementsByTagName('input')[0].setAttribute('value', val);
  },

  _createInfobox: function(label) {
    //create input readonly
    var _input = document.createElement('input');
    // var _input = this._elements.input;
    _input.setAttribute('readonly','');
    _input.setAttribute('style', 'width:24px; text-align:center;');
    _input.setAttribute('value', '0');
    //create label "zoom"
    var _label = document.createElement('label');
    // var _label = this._elements.label;
    _label.appendChild(document.createTextNode(label + ":"));
    _label.appendChild(_input);
    _label.setAttribute('style','margin:auto;')

    //create div with 'input' and 'label' in it
    var _div = document.createElement('div');
    // var _div = this._elements.div;
    _div.className = "leaflet-container leaflet-control-layers leaflet-control-layers-expanded";
    _div.appendChild(_label);

    return _div;
  }
});

L.control.infobox = function(opts) {
  return new L.Control.Infobox(opts);
}
