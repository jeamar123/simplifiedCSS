var introLoader_trap = false;

scope.toggleIntroLoader = ( ) =>{
	if ( $( ".main-loader" ).fadeIn();	
		$( ".main-loader" ).fadeIn();	
		introLoader_trap = true;
	}else{
		setTimeout(function() {
			$( ".main-loader" ).fadeOut();
			introLoader_trap = false;
		}, 1000);
	}
}

scope.showIntroLoader = ( ) =>{
	$( ".main-loader" ).fadeIn();	
	introLoader_trap = true;
}

scope.hideIntroLoader = ( ) =>{
	setTimeout(function() {
		$( ".main-loader" ).fadeOut();
		introLoader_trap = false;
	}, 1000);
}





var loading_trap = false;

scope.toggleLoading = ( ) =>{
	if ( loading_trap == false ) {
		$( ".circle-loader" ).fadeIn();	
		loading_trap = true;
	}else{
		setTimeout(function() {
			$( ".circle-loader" ).fadeOut();
			loading_trap = false;
		},1000)
	}
}

scope.showLoading = ( ) =>{
	$( ".circle-loader" ).fadeIn();	
	loading_trap = true;
}

scope.hideLoading = ( ) =>{
	setTimeout(function() {
		$( ".circle-loader" ).fadeOut();
		loading_trap = false;
	},1000)
}