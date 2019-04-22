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


## Workflow

* [User] Select a body
  * Mars
  * Mercury
  * Moon
* Loads _all data_ for selected body
  * "_all data_" is internally defined and grouped as
    * global basemap
    * raster layers
    * vector layers
* Each (local) map must be labeled, labels are used to
  1. populate map' widget controls to show/hide accordingly,
  2. populate search/combobox options, besides (lat,lon) search.
  * _Local maps are usually a group of (raster/vector) layers_
* [User] Select a map
* Pops up a list of associated files for download
