#Import all required extensions for app to run
import json
from flask_pymongo import PyMongo
from flask import Flask, jsonify, render_template, request, redirect
from bson.json_util import dumps
from pymongo import MongoClient
from joblib import load
import numpy as np
from bson import json_util

app = Flask(__name__)

loaded_model = load("random_forest.joblib")

#Provide a route to the page that is presented when app is initially run 

# setup mongo connection
MONGODB_HOST = 'localhost'
MONGODB_PORT = 27017
DBS_NAME = 'final_project'
COLLECTION_NAME = 'person_features'
FIELDS = {"Gender": True,"Age": True,"Caffeine (mg)": True,"Alcohol (gm)": True,"Weight (kg)": True,"Standing Height (cm)": True,"Pulse regular or irregular": True,"Systolic: Blood pressure mm Hg": True,"Direct HDL-Cholesterol (mg/dL)": True,"Avg Drinks per Day": True,"Smoker?": True, "_id": False}

# connect to mongo db and collection
connection = MongoClient(MONGODB_HOST, MONGODB_PORT)
collection = connection[DBS_NAME][COLLECTION_NAME]
projects = collection.find(projection=FIELDS)

#Retrieve our MongoDB Data collection:
@app.route("/json-data")
def person_data():
    connection = MongoClient(MONGODB_HOST, MONGODB_PORT)
    collection = connection[DBS_NAME][COLLECTION_NAME]
    projects = collection.find(projection=FIELDS)
    json_projects = []
    for project in projects:
        json_projects.append(project)
    json_projects = json.dumps(json_projects, default=json_util.default)
    connection.close()
    return json_projects

# Route to render visualization by querying web api from JavaScript
@app.route("/multiple")
def multiple():
    return render_template("multiple.html")

@app.route("/")
def home():
    #GoTo webpage
    return render_template("Homepage.html")

@app.route("/Homepage.html")
def homepage():
    #GoTo webpage
    return render_template("Homepage.html")

#Provide a route to the html process page
@app.route("/Results.html", methods=['POST', 'GET'])
def results_page():
    #GoTo webpage
    gender = int(request.args.get('Gender'))
    age = int(request.args.get('Age'))
    height = int(request.args.get('Height'))
    weight = int(request.args.get('Weight'))
    caffeine = int(request.args.get('Caffeine (MG)'))
    systolic = int(request.args.get('Systolic'))
    cholesterol = int(request.args.get('Cholesterol'))
    drinks = int(request.args.get('Drinks'))
    smokes = int(request.args.get('Smoker'))
    
    features = [gender, age, caffeine, 0, weight, height, systolic, cholesterol, drinks, smokes]
    final_features = [np.array(features)]
    prediction = loaded_model.predict(final_features)
            
    return render_template("Results.html", prediction_text=prediction)

# #Provide a route that will outsorce our mongodb data as an API to our webpages
# #NOT CREATED YET
# @app.route("/our-data-api")
# def scrape():
#     #Set variable to hold what is returned from calling the function
#     loaded_model = load("Resources/finalized_model.sav")
#     #Jsonify the query 
#     return loaded_model
    
# #function that queries database and returns the data
# def get_data_from_db():
#     client = MongoClient('mongodb://localhost:27017/')
    
#     #Variables for Mongo database and collection
#     db = database.data
#     collection = db.pulse

#     #Query database and put in a list
#     results_dict = list(collection.find({}, {'_id':False}))
#     client.close()

#     #Dictionary is returned from calling function
#     return results_dict


if __name__ == "__main__":
    app.run(debug=True)
