angular.module("feedModule", [
	{
		name: "ngAnimate",
		files: ['bower_components/angular-animate/angular-animate.js']
	},
	{
		name: "headerModule",
		files: ['modules/header/header.module.js']
	},
	{
		name: "feedServiceModule",
		files: ['modules/services/feed.service.js']
	},
	{
		name: "profileInfoPopupModule",
		files: ['modules/profile.info.popup/profile.info.popup.module.js']
	}
])
.controller("feedCtrl", ['$scope', 'feedService', function ($scope, feedService) {
	$scope.feed = [];
	$.getScript('//cdn.jsdelivr.net/isotope/1.5.25/jquery.isotope.min.js',function(){
		$('#posts').imagesLoaded( function(){
			$('#posts').isotope({
				itemSelector : '.item'
			});
		});
	});
	$scope.randomImages = [
		'http://www.desibucket.com/wp-content/uploads/2015/01/Diksha-Seth.jpg',
		'https://timesalert.com/wp-content/uploads/2016/05/prabhas.jpg',
		'http://apherald-nkywabj.stackpathdns.com/ImageStore/images/movies/movies_gossips/ileanawarnis-647x450.jpg',
		'http://apherald-nkywabj.stackpathdns.com/ImageStore/images/movies/51/paw-647x450.jpg',
		'http://moviegalleri.net/wp-content/gallery/arun-adith-photos/arun_adith_latest_stills_22.jpg',
		'http://im.rediff.com/movies/2012/dec/31slide1.jpg',
		'http://img01.ibnlive.in/ibnlive/uploads/875x584/jpg/2016/04/karthiactor.jpg',
		'http://dc-cdn.s3-ap-southeast-1.amazonaws.com/dc-Cover-no39kk2chmskhi7mvl5egl0i32-20160315001415.Medi.jpeg',
		'http://www.thecinebay.com/public/media/tinyimages/tamanna1.jpg',
		'http://im.rediff.com/movies/2016/jan/13telugu-actors1.jpg',
		'http://static.koimoi.com/wp-content/new-galleries/2015/09/box-office-predictions-hero-news-bollywood.jpg',
		'http://www.hdfinewallpapers.com/HDWallpapers/Big/Salman-Khan/Stylish_Look_of_Salman_Khan_Bollywood_Hero_HD_Desktop_BackgroundWallpaper.jpg',
		'http://media1.santabanta.com/full1/Bollywood%20Movies/Hero/hero-6a.jpg',
		'http://www.hdfinewallpapers.com/HDWallpapers/Big/John-Abraham/Handsome_Bollywood_Hero_John_Abraham_Wallpapers.jpg',
		'http://2.bp.blogspot.com/-SR0_YRM2NP8/T24PdlAwJHI/AAAAAAAADfs/zToPeyQ8hv0/s1600/ram+20.jpg',
	]
	$scope.feedProfile = {};
	$scope.logged = false;
	feedService.get().then(function (data) {
		$scope.feed = data;
		angular.forEach($scope.feed, function (item, index) {
			item.url = $scope.randomImages[index];
			item.thumbnailUrl = $scope.randomImages[index]
		});
		setTimeout(function () {
			$("#preloader").fadeOut();
			$('div.feed').each(function(i) {
			  	$(this).fadeOut(0).delay(200*i).fadeIn(1300);
			});
		}, 1200);
	}, function (error) {
		console.log(error);
	});

	$scope.hoverIn = function(id){
	    $('#profile-popup-'+id).delay(50).fadeIn(100);
	};

	$scope.hoverOut = function(id){
	    $('#profile-popup-'+id).fadeOut(0);
	};
}]);
