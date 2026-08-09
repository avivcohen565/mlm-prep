#!/bin/bash
# מחליף את חותם הגרסה (?v=...) על כל תגי <script src="...js"> ב-index.html,
# כדי שדפדפנים ידעו לטעון גרסה חדשה של הקבצים אחרי כל עדכון.
set -e
cd "$(dirname "$0")"
V=$(date +%s)
sed -i '' -E "s/(src=\"[a-zA-Z0-9_-]+\.js)(\?v=[0-9]+)?\"/\1?v=$V\"/g" index.html
echo "bumped to ?v=$V"
