# Build the client files in a build stage
FROM woahbase/alpine-ng as ngbuild
# Copy the project into /tmp/client
COPY --chown=alpine . /tmp/client
WORKDIR /tmp/client
# Build the client with npm and ng
RUN npm install --no-interactive \
    && ng build --prod

# Build the production web server and client container
# Caddy is a web server with automatic HTTPS
FROM abiosoft/caddy
# Copy the client files from the build stage
COPY --from=ngbuild /tmp/client/dist/client /www/client
# Copy the Caddyfile (configuration for Caddy)
COPY ./Caddyfile /etc/Caddyfile
# Set default Caddy host
ENV CADDY_HOST localhost
