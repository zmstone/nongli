$(document).ready(function() {
    app = null;

    // Model
    var CalendarModel = Backbone.Model.extend({
        default: function() {
            return {
                summary: "default summary",
                id:      -1
            }
        },

        initialize: function(spec) {
            this.set('id', spec.id);
            this.set('summary', spec.summary);
        },

        toJSON: function() {
            return {
                summary: this.get('summary'),
                id: this.get('id')
            }
        }
    });

    var CalendarList = Backbone.Collection.extend({
        model: CalendarModel
    });

    var calendarlist = new CalendarList;

    // View
    var CalendarView = Backbone.View.extend({
        tagName: "tr",

        initialize: function() {
            this.html = app.renderTemplate('calendar', this.model.toJSON());
        },

        render: function() {
            $(this.el).html(this.html);
            return this;
        }
    });

    var CalendarListView = Backbone.View.extend({
        tagName: "table",

        render: function() {
            var self = this;
            self.$el.empty();
            _.each(self.model.models, function(ce, i) {
                self.$el.append((new CalendarView({model: ce})).render().el)
            });

            return self;
        }
    });

    AppView = Backbone.View.extend({
        el: $("#content"),
        cache: {},

        loadTemplate: function(name) {
            var url = name + ".handlebars";
            var template = $.ajax({url: url, async: false}).responseText;
            return Handlebars.compile(template);
        },

        renderTemplate: function(name, data) {
            var self = this;
            if(!self.cache[name]) {
                self.cache[name] = self.loadTemplate(name);
            }
            return self.cache[name](data || {});
        },

        render: function() {
            var view = new CalendarListView({model: calendarlist});

            var rendered_view = view.render();
            $('#content').html(rendered_view.el);
            window.prettyPrint && prettyPrint();
            return this;
        },

        start: function(calendars) {
            app = this;
            for(var i=0; i<calendars.length; i ++){
                calendarlist.add(new CalendarModel({summary: calendars[i].summary,
                                                    id: calendars[i].id
                                                   }));
                /*
                console.log("summary:");
                console.log(i + ": " + calendars[i].summary);
                console.log("id:");
                console.log(i + ": " + calendars[i].id);
                */
            }
            //console.log(calendarlist.toJSON());
        }
    });
    // start to do backbone stuff
});
