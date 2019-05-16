/*
Template body:
{
  maps: [

    { name: <string>,
      bbox: <4-length array of lat(x),lon(y) values>::[minx,miny,maxx,maxy],
      layers: {
        multiple: [
          { layerID: <string>,
            layerLabel: <string>
            packagename: <string>
          }
        ],
        exclusive: [
          { switchGroup: <string>,
            layerID: <string>,
            layerLabel: <string>,
            packagename: <string>
          }
        ]
      }
    }
    // OR
    { name: <string>,
      bbox: <4-length array of lat(x),lon(y) values>::[minx,miny,maxx,maxy],
      package: {
        id: <string>,
        info: <string#url>,
        download: <string#url>
      }
    }

  ]
}
*/

// var _templateMaker = function (object) {
//     return function (context) {
//         var replacer = function (key, val) {
//             if (typeof val === 'function') {
//                 return context[val()]
//             }
//             return val;
//         }
//         return JSON.parse(JSON.stringify(obj, replacer))
//     }
// }
//
// var _template_single = {
//   name: '',
//   bbox: [],
//     package: {
//       id: <string>,
//       info: <string#url>,
//       download: <string#url>
//     }
//   }
//     name: "Alfred",
//     stats: {
//         age: 32,
//         position: {
//             title: function () { return 'title' },
//             level: function () { return 'level' }
//         }
//     }
// }
//
// var template = templateMaker(obj);
//
// var data = {
//     title: "Manager",
//     level: 10
// }
//
// var rendered = template(data);
// {
//     "name": "Alfred",
//     "stats": {
//         "age": 32,
//         "position": {
//             "title": "Manager",
//             "level": 10
//         }
//     }
// }

var init_map = function(name, bbox, single_package) {
    single_package = single_package || true;
    console.log("Init map: " + name + "(" + JSON.stringify(bbox) + ")");

    var out;
    if (single_package) {
      out = {
        name: name,
        bbox: bbox,
        package: {
          id: ,
          info: ,
          download: ,
        }
      };
    }
    else {
      out = {
        name: name,
        bbox: bbox,
        layers: {
          multiple: [],
          exclusive: []
        }
      };
    }
    return out;
}
