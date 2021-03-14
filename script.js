function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 10.77314238861303, lng: 106.69577857787237},
        zoom: 18,
        mapId: '30b7d7a835cadf5e',
        mapTypeControl: false,
        fullscreenControl: false,
        streetViewControl: false
      });
      // content
      // kinh độ
      // vĩ độ
      // url
      // size
      const markers = [
        ["Yoshi\'s house",
        10.773458565308571,
        106.69642230782189,
        "./img mario/yoshi_house.svg",
        28,
        30],
        ["castle",
        10.773652323870111, 106.69946645387827,
        "./img mario/castle.svg",
        28,
        30],
        ["ghosthouse",
        10.774449976130159, 106.69574043406247,
        "./img mario/ghosthouse.svg",
        28,
        30],
        ["hill_with_eyes",
        10.771862029996715, 106.69756284568284,
        "./img mario/hill_with_eyes.svg",
        28,
        30],
        ["pipe",
        10.77002741088737, 106.69661555251683,
        "./img mario/pipe.svg",
        28,
        30],
        ["pointer",
        10.769956507508612, 106.6993491699606,
        "./img mario/pointer.svg",
        28,
        30],
        ["star",
        10.772455841511798, 106.69562315014517,
        "./img mario/star.svg",
        28,
        30],
      ];
      for (let i=0; i<markers.length; i++){
          const currMarker = markers[i];
          const marker = new google.maps.Marker({ // vị trí kinh độ  và vĩ độ
            position: {lat: currMarker[1], lng: currMarker[2]},
            map,
            title: "Hello World!",
            icon : {
                url: currMarker[3],
                scaledSize: new google.maps.Size(currMarker[4],currMarker[5]) // size của icon
            },
            animation: google.maps.Animation.DROP // animation icon
          });
          const infowindow = new google.maps.InfoWindow({ //hiện thông báo
              content: currMarker[0],
          })
          marker.addListener('click', () =>{
            infowindow.open(map, marker);
          });
      }

}