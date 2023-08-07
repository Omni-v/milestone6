// Courses data
$(document).ready(function() {
    var courses = {
        "Fall 2023": ["CST-339: JAVA 3 ", "CST-250: C# 2 ", "CST-345: Database Design "],
        "Spring 2024": ["CST-391 - JavaScript Web Application Development ", "CST-201: Algorithms and Data Structures", "CST-321: operating system fundamentals", "CST-350: C# 3"],
        // add other semesters here
    };

    $(".timelineEvent").on("click", function() {
        var semester = $(this).text();
        var semesterCourses = courses[semester];

        if (semesterCourses) {
            var coursesList = semesterCourses.map(function(course) {
                return "<li>" + course + "</li>";
            }).join("");

            $("#courseInfo").html("<h2>" + semester + "</h2><ul>" + coursesList + "</ul>");
        } else {
            $("#courseInfo").html("<h2>" + semester + "</h2><p>No courses listed for this semester.</p>");
        }
    });
});