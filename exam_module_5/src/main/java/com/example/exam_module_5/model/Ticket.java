package com.example.exam_module_5.model;
import javax.persistence.*;

@Entity
@Table(name = "ticket")
public class Ticket {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private Integer cost;
    private String start;
    private String end;
    private String dayStart;
    private String time;

    @ManyToOne
    @JoinColumn(name = "id_home", referencedColumnName = "id")
    private Home home;

    private Integer quantity;

    public Ticket() {
    }

    public Ticket(Integer id, Integer cost, String start, String end, String dayStart, String time, Home home, Integer quantity) {
        this.id = id;
        this.cost = cost;
        this.start = start;
        this.end = end;
        this.dayStart = dayStart;
        this.time = time;
        this.home = home;
        this.quantity = quantity;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getCost() {
        return cost;
    }

    public void setCost(Integer cost) {
        this.cost = cost;
    }

    public String getStart() {
        return start;
    }

    public void setStart(String start) {
        this.start = start;
    }

    public String getEnd() {
        return end;
    }

    public void setEnd(String end) {
        this.end = end;
    }

    public String getDayStart() {
        return dayStart;
    }

    public void setDayStart(String dayStart) {
        this.dayStart = dayStart;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public Home getHome() {
        return home;
    }

    public void setHome(Home home) {
        this.home = home;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }
}
