# The app design

The app has a single page layout mainly composed by a _map_ with supportive
widgets for users navigation and data access.

#### Vocabulary

* **map** means any dataset providing a _local_ set of features (vector data)
or basemap (raster data). On the other hand, _global_ datasets -- raster or
vector data covering the entire planet -- will be explicitly called _global maps_.


## Requirements

* For each (local) map, there must be a global basemap providing background canvas;
  * _I.e._, the Appolo basin map is plot over the Moon gloval basemap.

* Global basemaps:
  - [ ] Moon
  - [ ] Mercury
  - [ ] Mars

- [ ] A Search box providing navigation (_i.e._, "go-to") functionality,
  - [ ] `Lon,Lat`,
  - [ ] _named location_.

- [ ] Download underlying datasets
