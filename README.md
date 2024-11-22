# momentary.js

minimal "timeago" style javascript library


## Example usage



```
Momentary.fromNow(datestring);
```

Output: now, 1m, 2h, 4d, for dates older than 1 month it will write the date as DD\MM\YYYY


```
Momentary.fromNow(datestring, locale);
```

Set the locale (e.g. "en-us", "en-GB" to change the format of the full date), default is "en-GB"


```
Momentary.fromNow(datestring, locale, options);
```

Add date formatting options, default is {year: 'numeric', month: 'numeric', day: 'numeric'}

