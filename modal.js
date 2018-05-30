$(document).ready(function()
{
	$("#button-popup").click(function()
	{
		$(".window-popup").slideToggle(300)
	});

	$("#button-popup-close").click(function()
	{
		$(".window-popup").fadeOut(300)
	});
});