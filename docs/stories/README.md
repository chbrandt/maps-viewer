# StoryMapp

## Stories

### Format

The fundamental (file/data) format for our stories is a list of documents,
where each document is a section of the running narrative and composed by:
* Title: the headline of that section;
* Text: effectively the textual content;
* Thumbnail: a graphical content integrating the text;
* Order: the position inside the narrative timeline;
* Location: effective position associated with the content.

Those are the essencial components to structure a story.
We may effectively structure our documents as [GeoJSON] features -- to enjoy the
standards and flexibility of _features_ -- and their `properties` to save the
content:
```json
[
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-135.7, 10]
    },
    "properties": {
      "title": "Once upon a time..",
      "order": 0,
      "text": "Start the story, this should an informative but not exaustive text",
      "media": {
        "thumbnail": "path/to/thumbnail.jpg",
        "type": "mesh",
        "data": "path/to/mesh.obj"
      }
    }
  }
]
```


[geojson]: http://geojson.org
