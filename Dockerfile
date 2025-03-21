FROM node:lts-buster

#Mengubah jalur ke /home
WORKDIR /home

#Melakukan perintah lainnya
RUN apt-get update && \
    apt-get install -y \
    ffmpeg \
    imagemagick \
    webp && \
    apt-get upgrade -y && \
    rm -rf /var/lib/apt/lists/*

#Menyalin file package.json ke /home
COPY package.json /home/

#Melakukan perintah npm install
RUN npm install && npm install qrcode-terminal

#Menyalin file lainnya ke /home
COPY . /home/

#Membuka port
EXPOSE 5000 5500 6000 6500 7000 7500 8000 8500 9000 9500 10000

#Menjalankan perintah node
CMD [ "node", "/home/index.js", "--nohp", "$NOHP_VALUE", "--link", "$LINK_VALUE" ]

