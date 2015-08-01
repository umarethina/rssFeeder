/**
 * Created by urethina on 7/30/15.
 */

//Feeder view mode with basic info (title, description and image to start with)

function FeederViewModel(url) {
	this.origUrl = ko.observable(url);
	this.url = ko.observable(url);
	this.entries = ko.observableArray(null);
	this.channelId = ko.observableArray(null);

	var self = this;

	this.getEntries = ko.computed(function () {
		$.getJSON(self.url(), function (data) {

			self.entries([]);
			self.channelId([]);

			for (var item in data.items) {
				self.entries.push(data.items[item].snippet);
				self.channelId.push(self.origUrl()+"&channelId="+data.items[item].snippet.channelId);
			}
		});
	});
}

function getListData(url) {
		ko.applyBindings(new FeederViewModel(url));
}
