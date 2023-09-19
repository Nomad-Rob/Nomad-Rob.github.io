# All commands start with make

# Builds a docker image for a development box with a image name, can change dev to project name
build:
	docker build -t portfolio-website .

# Runs the image name in a container
# This will run the image in the background and map port 2022 to the ssh port on the dev box
# Feel free to add more ports as needed, (ex: docker run -d -p 2022:22 -p 9000:80 image name)
run:
	docker run -d -p 2022:22 -p 8080:8080 -p 9000:9000 -p 9001:9001 --name portfolio-website portfolio-website

# Exposes port 3000 aviable to the world outside of the container
expose:
	docker run -d -p 3000:3000 --name portfolio-website portfolio-website


start:
	docker start portfolio-website

# SSH into the running portfolio-website
ssh:
	ssh -p 2022 root@localhost

# Stop all running docker containers
stop:
	docker stop $$(docker ps -a -q)

# Remove all docker containers
clean:
	docker rm $$(docker ps -a -q)

# Remove all docker images, containers, and volumes
nuke:
	docker system prune -af

# Reset known hosts on local machine for port 2022
# This may need to be run if you make a new portfolio-website and aren't able to ssh into it
reset-known-hosts:
	ssh-keygen -R [localhost]:2022
