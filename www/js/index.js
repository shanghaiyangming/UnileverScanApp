document.addEventListener('deviceready', function() {
	bluetoothSerial.list(function(data){
		mac_address = data[0]['address'];
		console.log('mac_adress is '+mac_address);
		bluetoothSerial.connect(mac_address, function(){
			bluetoothSerial.read(function (data) {
				alert(data);
			}, function(){
				alert('read failure');
			});
		}, function() {
			alert('connect failure');
		};);
	}, function(){
		alert('fail get bluetooth list');
	});
});