## Practice

This sprint has 5 practices.

**Note:** Prior to developing solutions for the practices, ensure the environment is set up with the installations listed below.

### Implementation Environment

#### Install json-server

Refer to the instructions given [here](./implementation-env-setup/json-server-installation-guide.md) file for downloading and installing `json-server`.

#### Install Postman App

Download source for desktop version of Postman app from [here](https://www.postman.com/downloads/)

Use the downloaded source code to install Postman App.

For more details [click here](./implementation-env-setup/postman-installation-guide.md).

### Problem Statements

#### Practice 1 - List the Installation and Startup Details of `json-server`

Start `json-server` from the folder `p1-list-details`, to read data from `db.json` file.

Note down the installation and start up details as mentioned in file `p1-submission.md`.

The details should be noted in the same file.

The file is located inside the folder named `p1-list-details`.

#### Practice 2 - Make HTTP Request to Fetch Movies

To retrieve movie data from the `movies.json` file using json-server, list down the HTTP request URLs to fetch movies based on the criteria specified in the upcoming slide.​

**Note:** ​You may write the request URLs in the Postman app directly and test it.

##### Tasks

Start the json-server. The server should read the data from `movies.json` file which is provided in the boilerplate.​

Specify the request and response details in the `p2-submission.csv` file located inside folder `p2-make-http-fetch-request` of the boilerplate.​

Write HTTP requests to fetch:​
- all movies' data​
- a movie having the id `502`​
- a movie having the id `600`​
- a movie having the title `365 Days`​
- movies having the genre `Action`​
- movies having the genre `Action` and released in the year `2022`​

Test the request URLs using Postman and note the response details.

#### Practice 3 - Make an HTTP Request to Add a Movie

The list of movies stored in `movies.json` file is accessible through the json-server. Write HTTP request URL to add movie to the movie list.

**Note:** ​You may write the request URLs in the Postman app directly and test it.

##### Tasks

Start the json-server. The server should read the data from `movies.json` file which is provided in the boilerplate.​

Specify the request and response details in the `p3-submission.csv` file located inside folder `p3-make-http-save-request` of the boilerplate, to add movies with the details given in the table below:

| ID  | Movie-name          | Year of Release | Genre  | Director      | Actor-1     | Actor-2        | Actor-3        | Rating   | On OTT |OTT
| --- | ------------------- | ---- | --------- | --------------- | --------------- | -------------- | --------------- | -------- | -- |--
| 514 | Father of the Bride | 2021 | Adventure | Gary Alazraki   | Actor name: Andy Garcia Screen name: Billy Herrera | Actor name: Gloria Estefan Screen name: Ingrid Herrera | Actor name: Adria Arjona Screen name:  Sofia Herrera | 5.9 / 10 | No |
| 503 | Spiderhead          | 2022 | Action    | Joseph Kosinski | Actor name: Chris Hemsworth Screen name: Abnesti | Actor name: Miles Teller Screen name: Jeff | Actor name: Jurnee Smollett Screen name: Lizzy| 5.4 / 10 | No |

Test the request URLs using Postman and note the response details.

#### Practice 4 - Make an HTTP Request to Update Movie

The list of movies stored in `movies.json` file is accessible through the json-server. Write HTTP request URL to update an existing movie with the details provided in the upcoming slide.

**Note:** ​You may write the request URLs in the Postman app directly and test it.

##### Tasks

Start the json-server. The server should read the data from `movies.json` file which is provided in the boilerplate.​

Specify the request and response details in the `p4-submission.csv` file located inside folder `p4-make-http-update-request` of the boilerplate, to update movies with the details given in the table below:

| ID  | Movie-name          | Year of Release | Genre  | Director      | Actor-1     | Actor-2        | Actor-3        | Rating   | On OTT | OTT
| --- | ------------------- | --------------- | ------ | ------------- | ----------- | -------------- | -------------- | -------- | ------ |--
| 514 | Father of the Bride | 2022            | Comedy | Gary Alazraki | Actor name: Andy Garcia Screen name:  Billy Herrera   | Actor name: Gloria Estefan  Screen name:  Ingrid Herrera | Actor name: Adria Arjona Screen name:  Sofia Herrera| 5.9 / 10 | Yes    | Netflix
| 500 | Top Gun             | 1986            | Action | Tony Scott    | Actor name:  Tom Cruise Screen name: Maverick   | Actor name: Tim Robbins Screen name:  Merlin | Actor name: Kelly McGillis Screen name:  Charlie | 6.9 / 10 | Yes    | Prime Video

Test the request URLs using Postman and note the response details.

#### Practice 5 - Make an HTTP Request to Delete Movie

The list of movies stored in `movies.json` file is accessible through the json-server. Write HTTP request URL to delete an existing movie.

**Note:** ​You may write the request URLs in the Postman app directly and test it.

##### Tasks

Start the json-server. The server should read the data from `movies.json` file which is provided in the boilerplate.​

Specify the request and response details in the `p5-submission.csv` file located inside folder `p5-make-http-delete-request` of the boilerplate, to delete movies with IDs `501` and `550`.​

Test the request URLs using Postman.

### Submission Instructions

1. This practice would be manually evaluated.​
2. Ensure all the request URLs are tested using Postman before final submission.​
3. Push the code to git and share the link with mentor for manual evaluation.