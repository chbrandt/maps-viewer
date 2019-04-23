# Planmap data

Data for the planmap are composed by raster and vector data sets for
Mars, Mercury, and the Moon.
Follows the data set references.

In the app, data is presented in Web-Mercator, [EPSG:3857].

[epsg:3857]: https://epsg.io/3857


## Mercury

#### Projection
* Proj4 webmercator:
> +proj=merc +a=2439700 +b=2439700 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +wktext  +no_defs

#### Global basemap
* Gray: [Mercury MESSENGER MDIS Basemap LOI Global Mosaic 166m (256ppd)](https://astrogeology.usgs.gov/search/map/Mercury/Messenger/Global/Mercury_MESSENGER_MDIS_Basemap_LOI_Mosaic_Global_166m)
* Color: [Mercury MESSENGER MDIS Basemap MD3 Color Global Mosaic 665m (64ppd)](https://astrogeology.usgs.gov/search/map/Mercury/Messenger/Global/Mercury_MESSENGER_MDIS_Basemap_MD3Color_Mosaic_Global_665m)


## Mars

#### Projection
* Proj4 webmercator:
> +proj=merc +a=3396190 +b=3396190 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +wktext  +no_defs

#### Global basemap
* Gray: [Mars MGS MOLA Elevation Model 463m (MEGDR)](https://astrogeology.usgs.gov/search/map/Mars/GlobalSurveyor/MOLA/Mars_MGS_MOLA_DEM_mosaic_global_463m)
* Color: [MGS MOLA Global Colorized Hillshade 463m](https://astrogeology.usgs.gov/search/map/Mars/GlobalSurveyor/MOLA/Mars_MGS_MOLA_ClrShade_merge_global_463m)


## Moon

#### Projection
* Proj4 webmercator:
> +proj=merc +a=1737400 +b=1737400 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +wktext  +no_defs

#### Global basemap
* Gray: [LRO LROC-WAC Global Morphology Mosaic 100m June2013](https://astrogeology.usgs.gov/search/map/Moon/LRO/LROC_WAC/Lunar_LRO_LROC-WAC_Mosaic_global_100m_June2013)
* Color: [Lunar LOLA Color Hillshade Blue Steel 64ppd (474m)](https://astrogeology.usgs.gov/search/map/Moon/LMMP/LOLA-derived/Lunar_LRO_LOLA_ClrShade_Global_64ppd_BlueSteel)
