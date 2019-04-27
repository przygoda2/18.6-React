var first = React.createClass({
    getInitialState: function () { // początkowy stan komponentu
        return {
            counter: 0
        };
    },


    componentDidUpdate: function () {
        console.log('componentDidUpdate');
    },

    increment: function () {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    decrement: function () {
        this.setState({
            counter: this.state.counter - 1
        });
    },

    render: function () {
        return React.createElement('div', { className: 'counter' },
            React.createElement('div', { id: 'counter' }, this.state.counter),
            React.createElement('button', { onClick: this.increment }, ' + '),
            React.createElement('button', { onClick: this.decrement }, ' - ')
        );
    }
});

/*
return React.createElement('div', { className: 'counter' },
            React.createElement(first),
            React.createElement(first),
            React.createElement(first),
        );
 */

var element = React.createElement(first);
ReactDOM.render(element, document.getElementById('first'));
ReactDOM.render(element, document.getElementById('second'));
ReactDOM.render(element, document.getElementById('three'));



/*

    componentWillMount: function() {
        console.log('wykonuje się przed render');
    },

    componentDidMount: function() {
        console.log('wyświetla komponenty na stronie');
    },

    componentWillReceiveProps: function() {
        console.log('wykonuje się po dodaniu nowych propsów');
    },

    shouldComponentUpdate: function() {
        console.log('sprawdza czy przerysowuje komponent');
        return true;
    },

    componentWillUpdate: function() {
        console.log('przygotowuje uaktualnienia');
    },

    componentDidUpdate: function() {
        console.log('wyświetla komponent po uaktualnieniu');
    },

    componentWillUnmount: function() {
        console.log('usuwa niepotrzebne komponenty');
    },
    
    */