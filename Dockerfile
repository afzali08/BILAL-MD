FROM quay.io/sampandey001/secktor

RUN git clone https://github.com/Bilalking001/BILAL-MD.git /Bilalking001

# Clear npm cache and remove node_modules directories
RUN npm cache clean --force
RUN rm -rf /root/Bilalking001/node_modules

# Install dependencies
WORKDIR /root/Bilalking001
RUN npm install

# Add additional Steps To Run...
EXPOSE 3000
CMD ["npm","start" ]

