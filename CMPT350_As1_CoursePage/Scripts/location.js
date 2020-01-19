

function getLocation( section ){
	
	var txt;
	
	switch( section ){
		case "02":
			txt = "Arts Building, Room 134";
			break;
		case "T02":
			txt = "Thorvaldson Building, Room S320";
			break;
		case "T04":
			txt = "Thorvaldson Building, Room S320";
			break;
		case "T06":
			txt = "Thorvaldson Building, Room S320";
			break;
		case "T08":
			txt = "Thorvaldson Building Room: S320";
			break;
		default:
			txt = "Invalid Argument Given";
			break;
	}
	alert( "Location is: \n" + txt );
}
