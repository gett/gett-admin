angular.module('gett')
    .filter('size', function() {
        return function(bytes, decimals){
            if(!bytes)
                return '0 B';
            var sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB'];
            if (bytes == 0) return '0 Byte';
            var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1000)));
            if(i < 0) i = 0; // TODO: fix this
            if(decimals == undefined)
                decimals = 1;
            return (bytes / Math.pow(1000, i)).toFixed(decimals) + ' ' + sizes[i];
        };
    });

angular.module('gett')
    .filter('changeTitle', function() {
        return function(share) {
            if(!share)
                return 'Share not found';
            if(share.title)
                return share.title;
            if(share.files && !share.files[0])
                return 'Empty share';
            var newTitle = '';
            if(share.fileseed == 1 || share.fileseed == 0)
                newTitle = share.files[0].filename;
            if(share.fileseed > 1) {
                var format = share.files[0].filename.split('.').pop();
                for(var i = 1; i < share.files.length; i++) {
                    var tempFormat = share.files[i].filename.split('.').pop();
                    if(tempFormat != format) {
                        newTitle = share.fileseed + ' files';
                        break;
                    } else {
                        newTitle = share.fileseed + ' ' + format;
                    }
                }
                newTitle = newTitle.replace('mp3', 'songs').replace('png', 'images').replace('jpg', 'images').replace('pdf', 'documents');
            }
            return newTitle;
        }
    });