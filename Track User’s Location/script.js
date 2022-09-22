// function init() {
//     new google.maps.Map(document.getElementById('map'), {
//       center: { lat: 59.325, lng: 18.069 },
//       zoom: 15
//     });
//   }



// Get proper error message based on the code.
const getPositionErrorMessage = code => {
    switch (code) {
      case 1:
        return 'Permission denied.';
      case 2:
        return 'Position unavailable.';
      case 3:
        return 'Timeout reached.';
    }
  }
  

//   Adding Marker to Your Map

// function init() {
    // const initialPosition = { lat: 59.325, lng: 18.069 };
  
    // const map = new google.maps.Map(document.getElementById('map'), {
    //   center: initialPosition,
    //   zoom: 15
    // });
  
    // const marker = new google.maps.Marker({ map, position: initialPosition });
  

//     const getCurrentPosition = ({ onSuccess, onError = () => { } }) => {
//         if ('geolocation' in navigator === false) {
//           // Invoke onError callback and pass an error object.
//           return onError(new Error('Geolocation is not supported by your browser.'));
//         }
      
//         return navigator.geolocation.getCurrentPosition(onSuccess, onError);
//       };
//      // Get user's location
//   if ('geolocation' in navigator) {
//     navigator.geolocation.getCurrentPosition(
//       position => {
//         console.log(`Lat: ${position.coords.latitude} Lng: ${position.coords.longitude}`);

//         // Set marker's position.
//         marker.setPosition({
//           lat: position.coords.latitude,
//           lng: position.coords.longitude
//         });

//         // Center map to user's position.
//         map.panTo({
//           lat: position.coords.latitude,
//           lng: position.coords.longitude
//         });
//       },
//       err => alert(`Error (${err.code}): ${getPositionErrorMessage(err.code)}`)
//     );
//   } else {
//     alert('Geolocation is not supported by your browser.');
//   }
// }



// New function to track user's location.
const trackLocation = ({ onSuccess, onError = () => { } }) => {
    if ('geolocation' in navigator === false) {
      return onError(new Error('Geolocation is not supported by your browser.'));
    }
  
    const trackLocation = ({ onSuccess, onError = () => { } }) => {
        // Omitted for brevity
      
        return navigator.geolocation.watchPosition(onSuccess, onError, {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0
        });
    };
  
//   function init() {
//     const initialPosition = { lat: 59.325, lng: 18.069 };
//     const map = createMap(initialPosition);
//     const marker = createMarker({ map, position: initialPosition });
  
//     // Use the new trackLocation function.
//     trackLocation({
//       onSuccess: ({ coords: { latitude: lat, longitude: lng } }) => {
//         marker.setPosition({ lat, lng });
//         map.panTo({ lat, lng });
//       },
//       onError: err =>
//         alert(`Error: ${getPositionErrorMessage(err.code) || err.message}`)
//     });
//   };

  function init() {
    const initialPosition = { lat: 59.325, lng: 18.069 };
    const map = createMap(initialPosition);
    const marker = createMarker({ map, position: initialPosition });
    const $info = document.getElementById('info');
  
    trackLocation({
      onSuccess: ({ coords: { latitude: lat, longitude: lng } }) => {
        marker.setPosition({ lat, lng });
        map.panTo({ lat, lng });
        // Print out the user's location.
        $info.textContent = `Lat: ${lat} Lng: ${lng}`;
        // Don't forget to remove any error class name.
        $info.classList.remove('error');
      },
      onError: err => {
        // Print out the error message.
        $info.textContent = `Error: ${getPositionErrorMessage(err.code) || err.message}`;
        // Add error class name.
        $info.classList.add('error');
      }
    });
  }