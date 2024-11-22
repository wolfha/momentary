//
// Copyright (c) Wolfgang Hauptfleisch. All rights reserved.
// Licensed under the MIT license.
// See LICENSE file in the project root for details.
//
class Momentary {

    static fromNow(times, locale = "en-GB", options = {year: 'numeric', month: 'numeric', day: 'numeric'}) {
        var timeago = "";

        try {

            let secs = Date.parse(times) / 1000;
            let nowsecs = Date.now() / 1000;
            let differ_s = Math.round( (nowsecs - secs));
            let differ_m = Math.round( (nowsecs - secs) / 60);
            let differ_h = Math.round( (nowsecs - secs) / 3600);
            let differ_d = Math.round( (nowsecs - secs) / 84000);

            var created_date = new Date(secs * 1000);
            if(differ_s < 60) {
                timeago = "now";
            } else if(differ_m < 60) {
                timeago = differ_m + "m";
            } else if(differ_h < 24) {
                timeago = differ_h + "h";
            } else if(differ_d < 28) {
                timeago = differ_d + "d";
            } else {
                timeago = created_date.toLocaleDateString(locale, options);
            }

        } catch(err) {

            console.log(err);

        }

        return timeago;
    }


}


