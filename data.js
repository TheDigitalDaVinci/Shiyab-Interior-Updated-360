var APP_DATA = {
  "scenes": [
    {
      "id": "0-formal-living",
      "name": "Formal Living",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.3569065988052467,
          "pitch": 0.13886298468422353,
          "rotation": 0,
          "target": "1-family-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-family-living",
      "name": "Family Living",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.7401533583267366,
          "pitch": 0.1541243917729318,
          "rotation": 0,
          "target": "2-dining"
        },
        {
          "yaw": -0.7695396076271965,
          "pitch": 0.04659781389379525,
          "rotation": 1.5707963267948966,
          "target": "0-formal-living"
        },
        {
          "yaw": -2.3595976586736978,
          "pitch": -0.15730540085197653,
          "rotation": 0,
          "target": "3-stair"
        },
        {
          "yaw": 2.7734502230698954,
          "pitch": -0.32686242374013297,
          "rotation": 0.7853981633974483,
          "target": "11-upper-living"
        },
        {
          "yaw": 1.1978958714364936,
          "pitch": 0.3787193010495642,
          "rotation": 0,
          "target": "6-passage"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-dining",
      "name": "Dining",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.6701549036377781,
          "pitch": 0.13776548661388155,
          "rotation": 0,
          "target": "5-work-area"
        },
        {
          "yaw": 1.6026736009092435,
          "pitch": 0.0780342024837033,
          "rotation": 0,
          "target": "4-kitchen"
        },
        {
          "yaw": -1.354995853518787,
          "pitch": 0.2391458199689005,
          "rotation": 0,
          "target": "1-family-living"
        },
        {
          "yaw": -0.3543346964933285,
          "pitch": 0.13316469010954712,
          "rotation": 0,
          "target": "3-stair"
        },
        {
          "yaw": -0.6679048806126016,
          "pitch": -0.26214465189869784,
          "rotation": 0.7853981633974483,
          "target": "11-upper-living"
        },
        {
          "yaw": -2.0846730281699895,
          "pitch": 0.10358445750713585,
          "rotation": 4.71238898038469,
          "target": "0-formal-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-stair",
      "name": "Stair",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.06796049118954883,
          "pitch": -0.4492983345354631,
          "rotation": 0,
          "target": "11-upper-living"
        },
        {
          "yaw": -1.3195347685652763,
          "pitch": 0.06012723054245228,
          "rotation": 0,
          "target": "2-dining"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-kitchen",
      "name": "Kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.5216635240915615,
          "pitch": 0.023361538336171606,
          "rotation": 0,
          "target": "2-dining"
        },
        {
          "yaw": -0.7741362600004056,
          "pitch": 0.12883464685899426,
          "rotation": 1.5707963267948966,
          "target": "5-work-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-work-area",
      "name": "Work Area",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.8542173342500643,
          "pitch": 0.1091654055217468,
          "rotation": 4.71238898038469,
          "target": "4-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-passage",
      "name": "Passage",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.0671311969102444,
          "pitch": -0.005377093700138502,
          "rotation": 0,
          "target": "9-gf-bedroom-2-view-1"
        },
        {
          "yaw": -0.9848560039129488,
          "pitch": 0.046720600876906104,
          "rotation": 0,
          "target": "7-gf-bedroom-1-view-1"
        },
        {
          "yaw": 0.1102121758636958,
          "pitch": 0.30975656207626123,
          "rotation": 0,
          "target": "1-family-living"
        },
        {
          "yaw": 0.3524311575422736,
          "pitch": -0.006918720560298297,
          "rotation": 0,
          "target": "2-dining"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-gf-bedroom-1-view-1",
      "name": "GF Bedroom 1 View 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.4870505569825667,
        "pitch": 0.009209763983584196,
        "fov": 1.335888521808506
      },
      "linkHotspots": [
        {
          "yaw": -2.5192090039140105,
          "pitch": 0.03969121607388715,
          "rotation": 0,
          "target": "6-passage"
        },
        {
          "yaw": 0.16950521822932885,
          "pitch": 0.23356080970789606,
          "rotation": 0,
          "target": "8-gf-bedroom-1-view-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-gf-bedroom-1-view-2",
      "name": "GF Bedroom 1 View 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -2.775549184259125,
        "pitch": 0.009116854281622011,
        "fov": 1.335888521808506
      },
      "linkHotspots": [
        {
          "yaw": 0.38288116174692455,
          "pitch": 0.23143979753062638,
          "rotation": 0,
          "target": "7-gf-bedroom-1-view-1"
        },
        {
          "yaw": 0.722294264136508,
          "pitch": 0.035153702770040596,
          "rotation": 0.7853981633974483,
          "target": "6-passage"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-gf-bedroom-2-view-1",
      "name": "GF Bedroom 2 View 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.28869675537339035,
        "pitch": 0.007533205950046806,
        "fov": 1.335888521808506
      },
      "linkHotspots": [
        {
          "yaw": 0.6815582850120698,
          "pitch": 0.0537933204862302,
          "rotation": 0,
          "target": "9-gf-bedroom-2-view-1"
        },
        {
          "yaw": -1.3209739209404,
          "pitch": 0.3534553596063148,
          "rotation": 0,
          "target": "9-gf-bedroom-2-view-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-gf-bedroom-2-view-2",
      "name": "GF Bedroom 2 View 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -3.1357504666327234,
        "pitch": -0.012960354322672174,
        "fov": 1.335888521808506
      },
      "linkHotspots": [
        {
          "yaw": 0.15138804878717238,
          "pitch": 0.05453667092522885,
          "rotation": 0,
          "target": "9-gf-bedroom-2-view-1"
        },
        {
          "yaw": -0.2317229945466508,
          "pitch": -0.06633921951298127,
          "rotation": 4.71238898038469,
          "target": "6-passage"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-upper-living",
      "name": "Upper Living",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.3190307559162324,
          "pitch": 0.2720595082158308,
          "rotation": 0,
          "target": "12-upper-living-passage"
        },
        {
          "yaw": 0.217952069289284,
          "pitch": 0.11122510506521621,
          "rotation": 3.9269908169872414,
          "target": "3-stair"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-upper-living-passage",
      "name": "Upper Living Passage",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.1960383911877006,
          "pitch": 0.29991093973068494,
          "rotation": 0,
          "target": "11-upper-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-ff-bedroom-1-view-1",
      "name": "FF Bedroom 1 View 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.09570366542605235,
        "pitch": -0.007646559281836218,
        "fov": 1.335888521808506
      },
      "linkHotspots": [
        {
          "yaw": 0.6226739440730729,
          "pitch": 0.22846394277087612,
          "rotation": 0,
          "target": "14-ff-bedroom-1-view-2"
        },
        {
          "yaw": -2.125277920591479,
          "pitch": -0.07200026268461102,
          "rotation": 0,
          "target": "12-upper-living-passage"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-ff-bedroom-1-view-2",
      "name": "FF Bedroom 1 View 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.2242899400489513,
        "pitch": 0.19585705560542976,
        "fov": 1.335888521808506
      },
      "linkHotspots": [
        {
          "yaw": 0.027587533006563802,
          "pitch": 0.10836722450099856,
          "rotation": 0,
          "target": "13-ff-bedroom-1-view-1"
        },
        {
          "yaw": 0.4909330630572324,
          "pitch": 0.03693307366040344,
          "rotation": 0,
          "target": "12-upper-living-passage"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-ff-bedroom-2-view-1",
      "name": "FF Bedroom 2 View 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.07352091334483823,
        "pitch": -0.002511068650015602,
        "fov": 1.335888521808506
      },
      "linkHotspots": [
        {
          "yaw": 0.3453610106945213,
          "pitch": 0.06603943561432324,
          "rotation": 0,
          "target": "12-upper-living-passage"
        },
        {
          "yaw": -1.5625115238508904,
          "pitch": 0.34321313950625765,
          "rotation": 0,
          "target": "15-ff-bedroom-2-view-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-ff-bedroom-2-view-2",
      "name": "FF Bedroom 2 View 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -2.5506394976944566,
        "pitch": 0.006011990164559222,
        "fov": 1.335888521808506
      },
      "linkHotspots": [
        {
          "yaw": 0.40976026913835817,
          "pitch": 0.12189973695767442,
          "rotation": 0,
          "target": "15-ff-bedroom-2-view-1"
        },
        {
          "yaw": 0.08231275725421128,
          "pitch": -0.045512658076532375,
          "rotation": 4.71238898038469,
          "target": "12-upper-living-passage"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Shiyab Interior Updated",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
