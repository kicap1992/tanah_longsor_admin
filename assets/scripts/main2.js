server_url = 'https://tanah-longosor-be.herokuapp.com/api/from_esp32/'
function sedang_proses() {
  $.blockUI({
    message: "Sedang Diproses",
    css: {
      border: 'none',
      padding: '15px',
      backgroundColor: '#000',
      '-webkit-border-radius': '10px',
      '-moz-border-radius': '10px',
      opacity: .5,
      color: '#fff'
    }
  });
}

function removeTZdate(val) {
  const date = new Date(val);

  date.setHours(date.getHours() + 8);

  
  //change a "T" and "Z" to " ", then remove the milliseconds
  // return "hehehe"
  return date.toISOString().replace(/T/g, " | ").replace(/Z/g, "");
}