import { Component, VERSION, OnInit } from '@angular/core';
import * as math from 'mathjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  designations = [
    {
    code: 'V1',
    formula: `V1`
    },
    {
    code: 'V2',
    formula: `V2 = V1 + 1`
    },
    {
    code: 'V3',
    formula: `V3 = V2 + 1`
    },
  ]

  cosntructor() {
  }

  ngOnInit() {
    const parser = math.parser();
    parser.evaluate('v1 = 1')
    parser.evaluate('v2 = v1 + 1')
    parser.evaluate('v3 = v1 + v2')

    const v3 = parser.evaluate('v3')
    const compilation = math.compile('v3 = v1 + v2')   
    console.log('Start');
    console.log('v3', v3, compilation.evaluate());
    parser.evaluate('v1 = 2')
        console.log('v3', v3);


  }
}
