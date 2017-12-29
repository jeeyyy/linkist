import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor() { }

  getData() {
    return this._dummyData;
  }

  _dummyData = {
    "currency": "GBP",
    "nodes": [
      [{
        "name": "November ",
        "type": "Month",
        "metaLabels": "",
        "trades": "229684",
        "revenue": "366477.5",
        "displayOrder": "0",
        "nodeId": "0",
        "parentNodeId": ""
      }],
      [{
        "name": "Others",
        "type": "ASSET CLASS",
        "metaLabels": "",
        "trades": "432",
        "revenue": "432",
        "displayOrder": "3",
        "nodeId": "3",
        "parentNodeId": "0"
      }, {
        "name": "Interest Rate Products",
        "type": "ASSET CLASS",
        "metaLabels": "",
        "trades": "219428",
        "revenue": "358700",
        "displayOrder": "2",
        "nodeId": "2",
        "parentNodeId": "0"
      }, {
        "name": "Equity Derivatives",
        "type": "ASSET CLASS",
        "metaLabels": "",
        "trades": "9824",
        "revenue": "7345.5",
        "displayOrder": "1",
        "nodeId": "1",
        "parentNodeId": "0"
      }],
      [{
        "name": "BROKERS - ZERO CHARGE",
        "type": "MODEL",
        "metaLabels": " broker_code = 'BLBG' AND side_role = 'Broker' ",
        "trades": "20894",
        "revenue": "0",
        "displayOrder": "50",
        "nodeId": "18",
        "parentNodeId": "2"
      }, {
        "name": "BROKERS HPC",
        "type": "MODEL",
        "metaLabels": " broker_code like '%HPC%' AND side_role = 'Broker' ",
        "trades": "768",
        "revenue": "3895",
        "displayOrder": "1000",
        "nodeId": "23",
        "parentNodeId": "2"
      }, {
        "name": "BROKERS SPECIAL RATES",
        "type": "MODEL",
        "metaLabels": " charge_group = 'Broker Special Rates' ",
        "trades": "3730",
        "revenue": "19607.5",
        "displayOrder": "900",
        "nodeId": "22",
        "parentNodeId": "2"
      }, {
        "name": "BROKERS IRPT",
        "type": "MODEL",
        "metaLabels": " broker_code like '%IRPT%' AND side_role = 'Broker' ",
        "trades": "11",
        "revenue": "20",
        "displayOrder": "1100",
        "nodeId": "24",
        "parentNodeId": "2"
      }, {
        "name": "BROKERS",
        "type": "MODEL",
        "metaLabels": " side_role = 'Broker' ",
        "trades": "193282",
        "revenue": "333861.5",
        "displayOrder": "1400",
        "nodeId": "27",
        "parentNodeId": "2"
      }, {
        "name": "BROKERS",
        "type": "MODEL",
        "metaLabels": " SIDE_ROLE= 'Broker' ",
        "trades": "9824",
        "revenue": "7345.5",
        "displayOrder": "100",
        "nodeId": "4",
        "parentNodeId": "1"
      }, {
        "name": "BROKERS MBUK",
        "type": "MODEL",
        "metaLabels": " broker_code like '%MBUK%' AND side_role = 'Broker' ",
        "trades": "723",
        "revenue": "1229",
        "displayOrder": "1200",
        "nodeId": "25",
        "parentNodeId": "2"
      }, {
        "name": "BROKERS AFSMB",
        "type": "MODEL",
        "metaLabels": " broker_code like '%AFSMB%' AND side_role = 'Broker' ",
        "trades": "20",
        "revenue": "87",
        "displayOrder": "1300",
        "nodeId": "26",
        "parentNodeId": "2"
      }, {
        "name": "BROKERS",
        "type": "MODEL",
        "metaLabels": " SIDE_ROLE= 'Broker' ",
        "trades": "432",
        "revenue": "432",
        "displayOrder": "2800",
        "nodeId": "13",
        "parentNodeId": "3"
      }],
      [{
        "name": "BROKERS AFSMB 6",
        "type": "RULES",
        "metaLabels": " tcp_id = 2 AND ticket_duration = 'Long-dated' ",
        "trades": "1",
        "revenue": "5",
        "displayOrder": "600",
        "nodeId": "47",
        "parentNodeId": "26"
      }, {
        "name": "BROKERS 2",
        "type": "RULES",
        "metaLabels": " tcp_id in  (3,5,6) AND ticket_duration = 'Long-dated' ",
        "trades": "9064",
        "revenue": "11330",
        "displayOrder": "200",
        "nodeId": "49",
        "parentNodeId": "27"
      }, {
        "name": "BROKERS 5",
        "type": "RULES",
        "metaLabels": " tcp_id = 4 ",
        "trades": "8",
        "revenue": "8",
        "displayOrder": "500",
        "nodeId": "52",
        "parentNodeId": "27"
      }, {
        "name": "BROKERS - ZERO CHARGE",
        "type": "RULES",
        "metaLabels": "DEFAULT",
        "trades": "20894",
        "revenue": "0",
        "displayOrder": "100",
        "nodeId": "20",
        "parentNodeId": "18"
      }, {
        "name": "BROKERS SPECIAL RATES 5",
        "type": "RULES",
        "metaLabels": " allocation_child_count > 0 AND ticket_duration = 'Short-dated' ",
        "trades": "14",
        "revenue": "0",
        "displayOrder": "500",
        "nodeId": "29",
        "parentNodeId": "22"
      }, {
        "name": "BROKERS MBUK 2",
        "type": "RULES",
        "metaLabels": " TCP_ID = 1 AND compression_ind is NULL  AND product_name in ('OIS','Single Currency Interest Rate Swap') AND ticket_duration = 'Short-dated' ",
        "trades": "17",
        "revenue": "25.5",
        "displayOrder": "200",
        "nodeId": "37",
        "parentNodeId": "25"
      }, {
        "name": "BROKERS AFSMB 1",
        "type": "RULES",
        "metaLabels": " product_name = 'FRA' AND tcp_id = 2 AND ticket_duration = 'Short-dated' ",
        "trades": "1",
        "revenue": "2",
        "displayOrder": "100",
        "nodeId": "42",
        "parentNodeId": "26"
      }, {
        "name": "BROKERS AFSMB 2",
        "type": "RULES",
        "metaLabels": " product_name = 'FRA' AND tcp_id = 1 AND ticket_duration = 'Short-dated' ",
        "trades": "1",
        "revenue": "3",
        "displayOrder": "200",
        "nodeId": "43",
        "parentNodeId": "26"
      }, {
        "name": "BROKERS SPECIAL RATES 3",
        "type": "RULES",
        "metaLabels": " tcp_id in  (3,5) AND ticket_duration = 'Long-dated' ",
        "trades": "468",
        "revenue": "1755",
        "displayOrder": "300",
        "nodeId": "27",
        "parentNodeId": "22"
      }, {
        "name": "BROKERS HPC 4",
        "type": "RULES",
        "metaLabels": " broker_code = 'HPC' AND ticket_duration = 'Short-dated' ",
        "trades": "232",
        "revenue": "580",
        "displayOrder": "400",
        "nodeId": "33",
        "parentNodeId": "23"
      }, {
        "name": "BROKERS MBUK 1",
        "type": "RULES",
        "metaLabels": " product_name in ('FRA','Cross Currency Basis Swap') AND ticket_duration = 'Short-dated' ",
        "trades": "303",
        "revenue": "303",
        "displayOrder": "100",
        "nodeId": "36",
        "parentNodeId": "25"
      }, {
        "name": "BROKERS MBUK 5",
        "type": "RULES",
        "metaLabels": " tcp_id = 2 AND ticket_duration = 'Long-dated' ",
        "trades": "1",
        "revenue": "15",
        "displayOrder": "400",
        "nodeId": "40",
        "parentNodeId": "25"
      }, {
        "name": "BROKERS AFSMB 4",
        "type": "RULES",
        "metaLabels": " product_name = 'Single Currency Interest Rate Swap' AND tcp_id = 1 AND ticket_duration = 'Long-dated' ",
        "trades": "2",
        "revenue": "30",
        "displayOrder": "400",
        "nodeId": "45",
        "parentNodeId": "26"
      }, {
        "name": "BROKERS 4",
        "type": "RULES",
        "metaLabels": " tcp_id in (1,2) AND ticket_duration = 'Long-dated' ",
        "trades": "92789",
        "revenue": "231972.5",
        "displayOrder": "400",
        "nodeId": "51",
        "parentNodeId": "27"
      }, {
        "name": "BROKERS SPECIAL RATES 4",
        "type": "RULES",
        "metaLabels": " tcp_id in (1,2) AND ticket_duration = 'Long-dated' ",
        "trades": "2012",
        "revenue": "15090",
        "displayOrder": "400",
        "nodeId": "28",
        "parentNodeId": "22"
      }, {
        "name": "BROKERS HPC 3",
        "type": "RULES",
        "metaLabels": " broker_code <> 'HPC' AND ticket_duration = 'Short-dated' ",
        "trades": "10",
        "revenue": "20",
        "displayOrder": "300",
        "nodeId": "32",
        "parentNodeId": "23"
      }, {
        "name": "BROKERS IRPT 1",
        "type": "RULES",
        "metaLabels": " product_name = 'Single Currency Basis Swap' ",
        "trades": "4",
        "revenue": "20",
        "displayOrder": "100",
        "nodeId": "34",
        "parentNodeId": "24"
      }, {
        "name": "BROKERS SPECIAL RATES 1",
        "type": "RULES",
        "metaLabels": " tcp_id = 3 AND ticket_duration = 'Short-dated' ",
        "trades": "262",
        "revenue": "327.5",
        "displayOrder": "100",
        "nodeId": "25",
        "parentNodeId": "22"
      }, {
        "name": "BROKERS HPC 2",
        "type": "RULES",
        "metaLabels": " broker_code <> 'HPC' AND ticket_duration = 'Long-dated' ",
        "trades": "130",
        "revenue": "325",
        "displayOrder": "200",
        "nodeId": "31",
        "parentNodeId": "23"
      }, {
        "name": "BROKERS MBUK 3",
        "type": "RULES",
        "metaLabels": " TCP_ID = 1 AND compression_ind = 'false' AND product_name in ('OIS','Single Currency Interest Rate Swap') AND ticket_duration = 'Short-dated' ",
        "trades": "68",
        "revenue": "68",
        "displayOrder": "300",
        "nodeId": "38",
        "parentNodeId": "25"
      }, {
        "name": "BROKERS HPC 1",
        "type": "RULES",
        "metaLabels": " broker_code = 'HPC' AND ticket_duration = 'Long-dated' ",
        "trades": "396",
        "revenue": "2970",
        "displayOrder": "100",
        "nodeId": "30",
        "parentNodeId": "23"
      }, {
        "name": "BROKERS AFSMB 3",
        "type": "RULES",
        "metaLabels": " product_name <> 'FRA' AND ticket_duration = 'Short-dated' ",
        "trades": "14",
        "revenue": "42",
        "displayOrder": "300",
        "nodeId": "44",
        "parentNodeId": "26"
      }, {
        "name": "BROKERS AFSMB 5",
        "type": "RULES",
        "metaLabels": " product_name = 'OIS' AND tcp_id = 1 AND ticket_duration = 'Long-dated' ",
        "trades": "1",
        "revenue": "5",
        "displayOrder": "500",
        "nodeId": "46",
        "parentNodeId": "26"
      }, {
        "name": "BROKERS 1",
        "type": "RULES",
        "metaLabels": "DEFAULT",
        "trades": "9764",
        "revenue": "7323",
        "displayOrder": "100",
        "nodeId": "4",
        "parentNodeId": "4"
      }, {
        "name": "BROKERS 2",
        "type": "RULES",
        "metaLabels": " single_sided_ind= 'T' ",
        "trades": "60",
        "revenue": "22.5",
        "displayOrder": "200",
        "nodeId": "5",
        "parentNodeId": "4"
      }, {
        "name": "BROKERS SPECIAL RATES 1",
        "type": "RULES",
        "metaLabels": " tcp_id <> 3 AND ticket_duration = 'Short-dated' ",
        "trades": "974",
        "revenue": "2435",
        "displayOrder": "200",
        "nodeId": "26",
        "parentNodeId": "22"
      }, {
        "name": "BROKERS MBUK 4",
        "type": "RULES",
        "metaLabels": " product_name in ('OIS','Single Currency Interest Rate Swap') AND tcp_id = 2 AND ticket_duration = 'Short-dated' ",
        "trades": "5",
        "revenue": "15",
        "displayOrder": "300",
        "nodeId": "39",
        "parentNodeId": "25"
      }, {
        "name": "BROKERS MBUK 6",
        "type": "RULES",
        "metaLabels": " tcp_id = 1 AND ticket_duration = 'Long-dated' ",
        "trades": "321",
        "revenue": "802.5",
        "displayOrder": "500",
        "nodeId": "41",
        "parentNodeId": "25"
      }, {
        "name": "BROKERS 3",
        "type": "RULES",
        "metaLabels": " tcp_id in (1,2) AND ticket_duration = 'Short-dated' ",
        "trades": "89733",
        "revenue": "89733",
        "displayOrder": "300",
        "nodeId": "50",
        "parentNodeId": "27"
      }, {
        "name": "DEFAULT1",
        "type": "RULES",
        "metaLabels": "DEFAULT",
        "trades": "432",
        "revenue": "432",
        "displayOrder": "100",
        "nodeId": "15",
        "parentNodeId": "13"
      }]
    ]
  };



}



