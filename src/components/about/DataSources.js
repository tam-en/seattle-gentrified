import React from 'react';

const DataSources = () => {
  return (
    <div>
      <p>
        <h2>Explanation of data sources and process</h2>
        <h3>Data Sources</h3>

        <p><strong>SPD Reports (<a href="https://www.kaggle.com/sam/seattle-crime#SPD_Reports.csv">Kaggle, data.seattle.gov</a>)</strong>
        <em>~684,000 entries, from 1965-2016</em>
        <br /><strong>Feature used:</strong> Reports of theft (not including car prowls). Thefts were the second highest type of report, beside car prowls. Car prowls were not included because people often report them out of obligation for insurance purposes.</p>

        <p><strong>Seattle Land Use Permits (<a href="https://www.kaggle.com/city-of-seattle/seattle-land-use-permits">Kaggle, City of Seattle Open Data</a>)</strong>
        <em>14,000 entries, from 1992-2018</em>
        <br /><strong>Feature used:</strong> Commerical and Multifamily land use permit applications.</p>
        
        <p><strong>Seattle Police Department 911 Incidents Response (<a href="https://www.kaggle.com/sohier/seattle-police-department-911-incident-response">Kaggle, City of Seattle Open Data</a>)</strong>
        <em>~1,430,000 entries, from 2009-2018</em>
        <br /><strong>Feature used:</strong> Feature used: Suspicious person reports. We speculated suspicious person reports would increase with gentrification (aka the Barbeque Becky Index).</p>

        <br /><br />Seattle Code Violation Cases (Kaggle, City of Seattle Open Data)
        ~41,000 entries, from 2003-2018
        Feature used: Tenant Reloction Ordinance records, indicating where low-income tenants forced to relocate due to buildings being torn down or renovated.
        https://www.kaggle.com/city-of-seattle/seattle-code-violation-cases

        <br /><br />
        House Sales in King County, USA (Kaggle, Public Domain)
        ~21,000 entries, from 2014 - 2015
        Feature used: House sales, weighted by price.
        https://www.kaggle.com/harlfoxem/housesalesprediction

        <br /><br />All datasets included latitude and longitude.



        <br /><br /><strong>Process:</strong> 
        <br />
        For each feature, data was clustered by latitude and longitude.<br />

        <br />Clustering used DBSCAN (Density-Based Spatial Clustering of Applications with Noise) with ball tree algorithm and haversine metric. Note using latitude and longitude is troublesome as the relationship between distance and degrees varies between the equator and the poles. We were not concerned with this issue because we were only dealing with a very local area. The resulting cluster midpoints were assigned a weight (count of data in cluster/total number of instances in the dataset). The resulting lat/long pairs with weights (for each feature) were then again clustered, returning one set of lat/long pairs with weights generalizing all our features. <br /><br />
        kaggle.com<br />
        Seattle Police Reports<br />
        Seattle Police Reports<br />
        kaggle.com<br />
        Seattle Land Use Permits<br />
        From City of Seattle Open Data<br />
        kaggle.com<br />
        Seattle Police Department 911 Incident Response<br />
        1.4 million responses from 2009 onwards<br />
        kaggle.com<br />
        Seattle Code Violation Cases<br />
        From City of Seattle Open Data<br />
        kaggle.com<br />
        House Sales in King County, USA<br />
        Predict house price using regression<br />
          
        </p>
    </div>
  )
}

export default DataSources;