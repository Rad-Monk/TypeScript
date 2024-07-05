day = 5  

install:
	npm install -g typescript

git:
	git pull &&\
	git add -A &&\
	git commit &&\
	git push

day:
	mkdir Day-$(day) &&\
	cd Day-$(day) &&\
	mkdir build &&\
	mkdir exercise &&\
	mkdir ts_code &&\
	cd Day-$(day)/ts_code &&\
