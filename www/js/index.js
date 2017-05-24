bluetoothSerial.list(function(data){
	mac_address = data[0]['address'];
	console.log('mac_adress is '+mac_address);
	bluetoothSerial.connect(mac_address, function(){
		bluetoothSerial.read(function (data) {
			alert(data);
		}, function(){
			console.log('read failure');
		});
	}, function() {
		console.log('connect failure');
	};);
}, function(){
	console.log('fail get bluetooth list');
});