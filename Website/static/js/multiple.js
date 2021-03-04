d3.json("/json-data", function(response) {

    console.log(response);
  
    var labels = [];
    var parents = [];
    var values = [];
    var values2 = [];
    var texture = [];
    var negative_list = [];
    var positive_list = [];
    var y_axis = [(negative_list.length), (positive_list.length)];
  
    for (var i = 0; i < response.length; i++) {
      var location = response[i];
      if (parseInt(location["Pulse regular or irregular"]) == 0 ){
        negative_list.push(parseInt(location["Pulse regular or irregular"]));
      }
      else {
        positive_list.push(parseInt(location["Pulse regular or irregular"]));
      }
        // texture.push(location);
      if (location) {
        labels.push(parseInt(location.Age));
        parents.push(parseInt(location["Pulse regular or irregular"]));
        values.push(parseFloat(location["Weight (kg)"]));
        values2.push(parseFloat(location["Caffeine (mg)"]));
        texture.push(parseInt(location["Avg Drinks per Day"]));
        
      }
      
    }
  
    console.log(labels);
    console.log(parents);
    console.log(values);
    console.log(texture)
    console.log(negative_list);
    console.log(positive_list);

    
    var accidents = {
        x: labels,
        y: values,
        mode: 'markers',
        marker: {
          color: parents
        },
        text: texture,
    };
    var accidents2 = {
      x: labels,
      y: values2,
      mode: 'markers',
      marker: {
        color: parents
      },
      text: texture,
  };

  var trace1 = {
    x: labels,
    y: values2,
    mode: 'markers',
    marker: {
      size: values2
    }
  };
  
  var data4 = [trace1];
  
  var layout3 = {
    title: 'Marker Size and Color',
    showlegend: false,
    height: 600,
    width: 600
  };
    
    var fatalities = {
        x: ["Pulse regular", "Pulse Irregular"],
        y: [1391, 31],
        type: 'bar'
    };

    var layout = {
      title: {
        text:'Age Model',
        font: {
          family: 'Courier New, monospace',
          size: 24
        },
        xref: 'paper',
        x: 0.05,
      },
      xaxis: {
        title: {
          text: 'Age',
          font: {
            family: 'Courier New, monospace',
            size: 18,
            color: '#7f7f7f'
          }
        },
      },
      yaxis: {
        title: {
          text: 'Weight(kg)',
          font: {
            family: 'Courier New, monospace',
            size: 18,
            color: '#7f7f7f'
          }
        }
      }
    };
    var layout2 = {
      title: {
        text:'Caffeine',
        font: {
          family: 'Courier New, monospace',
          size: 24
        },
        xref: 'paper',
        x: 0.05,
      },
      xaxis: {
        title: {
          text: 'Age',
          font: {
            family: 'Courier New, monospace',
            size: 18,
            color: '#7f7f7f'
          }
        },
      },
      yaxis: {
        title: {
          text: 'Caffeine (mg)',
          font: {
            family: 'Courier New, monospace',
            size: 18,
            color: '#7f7f7f'
          }
        }
      }
    };
    
    var data = [accidents];
    var data3 = [accidents2]
    var data2 = [fatalities];
    
    Plotly.newPlot('myDiv', data, layout);
    Plotly.newPlot('myDiv3', data3, layout2);
    Plotly.newPlot('myDiv2', data2);
    Plotly.newPlot('myDiv4', data4, layout3);
});



