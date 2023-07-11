npm install
npm run build

rm -rf /var/www/thismhanz.org/html/**
cp -r dist/** /var/www/thismhanz.org/html/