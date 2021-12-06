import React from 'react';
import { AnalyticsDashboard } from "react-analytics-charts";
import './styles.css'
import { PagesPerSessionChart,PieChart,SessionsByUserTypeChart,SessionsByDateChart,ColumnChart,ActiveUsersChart, SessionsGeoChart,SessionsBySourceChart, SessionsByHourChart, PageViewsPerPathChart } from "react-analytics-charts";
const AdminDashboard = ()=>{
    return(
        <div className="row">
          <div className="col-12" style={{padding:"0"}}>

          <AnalyticsDashboard
          
  authOptions={{ clientId:'836305785268-kvgn4buc52pdgejr98udrqn3snj2md89.apps.googleusercontent.com' }}
  renderCharts={(gapi, viewId) => {
    const chartStyles = {
      margin: "15px",
      maxWidth: "100%",
      width:"100%"
      //  height:"900px",
    };
    return (
      <div className="row" style={{display: "flex", flexWrap: "wrap", width:"100%", justifyContent:"center" }}>
        <div className="col-12 col-md-6">
        <ActiveUsersChart
        gapi={gapi}
        viewId={viewId}
        style={chartStyles}
        options={{ width: "100%" }}

        days={28}
        activeUserDays={7}
      />
        </div>
        <div className="col-12 col-md-6">

            <ColumnChart
        gapi={gapi}
        style={chartStyles}
        // options={{ width: "100%", height:"900px", title: `Sessions (14 Days)`, }}
        options={{ title: `Sessions (14 Days)`, }}


        query={{
          ids: viewId,
          "start-date": "14daysAgo",
          "end-date": "today",
          metrics: "ga:sessions",
          dimensions: "ga:date",
        }}
        container="sessions-by-date-chart"
        
      />
      </div>
      <div className="col-12 col-md-6">
      <PagesPerSessionChart gapi={gapi} viewId={viewId} days={28}         style={chartStyles}
/>

</div>
      <div className="col-12 col-md-6">

            <PieChart
        gapi={gapi}
        style={chartStyles}

        query={{
          ids: viewId,
          "start-date": "30daysAgo",
          "end-date": "today",
          metrics: "ga:sessions,ga:users,ga:pageviews",
          dimensions: "ga:deviceCategory",
        }}
        container="traffic-by-device-category-chart"
        // options={{
        //   title: "Traffic By Device Category (30 Days)",
        //   width: "100%", 
        //   height:"900px", 

        // }}
        options={{
          title: "Traffic By Device Category (30 Days)",
        }}
      />
      </div>
      <div className="col-12 col-md-6">

      <SessionsByUserTypeChart gapi={gapi} viewId={viewId} days={28} 
      style={chartStyles}
      // options={{ width: "100%", height:"900px" }}
      />
      </div>
      <div className="col-12 col-md-6">

        <SessionsByDateChart
          gapi={gapi}
          viewId={viewId}
          
          style={chartStyles}
          // options={{ width: "100%", height:"900px" }}

          showPageViews
          showUsers
        />
        </div>
      
        <div className="col-12 col-md-6">

        <SessionsBySourceChart
          gapi={gapi}
          viewId={viewId}
          style={chartStyles}
          // options={{ width: "100%", height:"900px" }}

        />
        </div>
        <div className="col-12 col-md-6">

        <SessionsByHourChart gapi={gapi} viewId={viewId} 
        style={chartStyles} 
        // options={{ width: "100%", height:"900px" }}
        />
        </div>
        <div className="col-12">
       <SessionsGeoChart
  gapi={gapi}
  viewId={viewId}
  style={chartStyles}
  showPageViews
  showUsers
  options={{ width: "100%", height:"600px" }}
/>
       </div>
        <div className="col-12">

        <PageViewsPerPathChart
          gapi={gapi}
          viewId={viewId}
          style={chartStyles}

          // options={{ width: "100%", height:"900px" }}
          />
        </div>
      </div>
    );
  }}
/>

          </div>
            

        </div>
    )
}

export default AdminDashboard;