import {LitElement, html} from '@polymer/lit-element';
import './add-item';
import './list-items';

class Gummi extends LitElement {
    static get properties () {
        return{
            todoList: Array
        } 
    }

    constructor (){
        super();
        let list = JSON.parse(localStorage.getItem('todo-list'));
        this.todoList = list === null ? [] : list;
    }

    
    firstUpdated(){
        
        this.addEventListener('addItem', (e) => {
        this.todoList = e.detail.todoList;
        });
        
        this.addEventListener('removeItem', (e) => {
        let index = this.todoList.map(function(item) {return item.id}).indexOf(e.detail.itemId);
            this.todoList.splice(index, 1);
            this.todoList = _.clone(this.todoList);
            localStorage.setItem('todo-list', JSON.stringify(this.todoList));
            //this.setState({}); 
        })
    

          this.addEventListener('changeItem', (e) => {
            let index = this.todoList.map( function(item) {return item.id}).indexOf(e.detail.itemId);
            this.todoList[index].done = !this.todoList[index].done;
            localStorage.setItem('todo-list', JSON.stringify(this.todoList));
        }) ;
    }


    render() {   
        const {todoList} = this     
        return html`
        <add-item></add-item>
        <list-items .todoList=${todoList}></list-items>   
        `;
      }
    }

customElements.define ('gummi-app', Gummi);
