angular.module("profileInfoPopupModule", []).directive('profilePopup', [function(){
	// Runs during compile
	return {
		restrict: 'E',
		scope: {
			info: "="
		},
		templateUrl: 'modules/profile.info.popup/profile.info.popup.template.html',
	};
}]);