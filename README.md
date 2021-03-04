# Finger on the Pulse
![alt text](https://github.com/Kinnaribadal/Final-Project/blob/main/Images/pulse.jpg)
----------------
Members:
Rafael Rodriguez,
Zach Kopec,
Nehemiah Porter,
Kinnari Patel,
Bill Roll 

----------------
# Project Proposal/Topic
Create a website which will help users determine if there’s a chance they may have an irregular heart beat. To determine this we will be building a machine learning model using several different health related inputs. Our website will allow a user to input their own information and based on the user inputs our machine learning model will try and predict whether or not the user is at risk to having an irregular heart beat.  

### Data Set

We will be utilizing National Health and Nutrition Examination Survey data from the CDC during 2013 - 2014. This dataset is composed of many different health metrics as well as survey data from individuals.

https://www.kaggle.com/cdc/national-health-and-nutrition-examination-survey?select=demographic.csv

### Variables Selected
* Gender
* Age
* Caffine(mg)
* Alcohol (gm)
* Weight (kg)
* Standing Height (cm)
* Systolic: Blood pressure mm Hg
* Direct HDL-Cholesterol (mg/dL)
* Avg Drinks per Day
* Smoker?

# Summary of Steps Taken


### Cleaning Data
* Python (Jupyter Notebook)
  * Pandas (Data Cleaning/Wrangling)
    * Uploaded data via CSV files.
    * Selected necessary columns.
    * Updated/cleaned certain fields to properly use with a machine learning model. 

### Building Model
* SciKit Learn (Machine Learning Model)
  * Model used: RandomForestClassifier
  * Exported model as a joblib file in order to reference while using flask.  

### Loading Data
* MongoDB
  * Load dataset from cleaned CSV data with correct formatting.

### Website Application and build
* Flask
* HTML
* CSS (Bootstrap)
* Javascript
* Website allows for user inputs to be submitted. Model will run and report whether the user is likely to have or not have an irregular heartbeat based on model. 

### Visualizations:
* Matplotlib (Model Visualization within Jupyter Notebook)
* Seaborn (Statistical Analysis- Correlation Matrix)
* Tableau(Data Visulization and Correlation matrix)
* D3

----------------
# Visuals
![alt text](https://github.com/Kinnaribadal/Final-Project/blob/main/Images/Correlation-Matrix-sns.png)
![alt text](https://github.com/Kinnaribadal/Final-Project/blob/main/Images/Correlational%20Matrix-Tableau.png)
![alt text](https://github.com/Kinnaribadal/Final-Project/blob/main/Images/Age%20vs%20pulse.png)
![alt text](https://github.com/Kinnaribadal/Final-Project/blob/main/Images/Gender%20vs%20height%20and%20weight.png)
![alt text](https://github.com/Kinnaribadal/Final-Project/blob/main/Images/linear%20regression.png)
