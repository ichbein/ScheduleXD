const translations = {
    az: {
        shift: "Növbə",
        morning: "Səhər",
        afternoon: "Günorta",
        week: "Həftə",
        bothWeeks: "Üst + Alt",
        upperWeek: "ÜST həftə",
        lowerWeek: "ALT həftə",
        generate: "Yarat",
        clear: "Təmizlə",
        print: "Çap",
        schedule: "Cədvəl",
        empty: "Cədvəl burada görünəcək",
        emptyDescription:
            "Cədvəlinizi yaratmaq üçün dərs əlavə edin.",
        lessonNameRequired:
            "Zəhmət olmasa, dərsin adını daxil edin.",
        scheduleRequired:
            "Zəhmət olmasa, bütün dərs vaxtlarını seçin.",
        addLesson: "Dərs əlavə et",
        editLesson: "Dərsi redaktə et",
        lessonName: "Dərsin adı",
        teacher: "Müəllim",
        room: "Otaq",
        roomLabel: "Otaq:",
        time: "Saat",
        day: "Gün",
        lesson: "Dərs",
        sameWeeks:
            "Üst və Alt həftə eynidir?",
        yes: "Bəli",
        no: "Xeyr",
        timesPerWeek:
            "Həftədə neçə dəfə?",
        upperTimes:
            "ÜST həftə neçə dəfə?",
        lowerTimes:
            "ALT həftə neçə dəfə?",
        edit: "Redaktə et",
        delete: "Sil",
        add: "Əlavə et",
        save: "Yadda saxla",
        cancel: "Ləğv et",
        continue: "Davam et",
        selectTimes:
            "Dərs vaxtlarını seç",
        confirmDelete:
            "Bu dərsi silmək istədiyinizə əminsiniz?",
        days: [
            "Bazar ertəsi",
            "Çərşənbə axşamı",
            "Çərşənbə",
            "Cümə axşamı",
            "Cümə",
            "Şənbə"
        ]
    },

    en: {
        shift: "Shift",
        morning: "Morning",
        afternoon: "Afternoon",
        week: "Week",
        bothWeeks: "Upper + Lower",
        upperWeek: "Upper week",
        lowerWeek: "Lower week",
        generate: "Generate",
        clear: "Clear",
        print: "Print",
        schedule: "Schedule",
        empty: "Schedule will appear here",
        emptyDescription:
            "Add a lesson to create your timetable.",
        lessonNameRequired:
            "Please enter the lesson name.",
        scheduleRequired:
            "Please select all lesson times.",
        addLesson: "Add lesson",
        editLesson: "Edit lesson",
        lessonName: "Lesson name",
        teacher: "Teacher",
        room: "Room",
        roomLabel: "Room:",
        time: "Time",
        day: "Day",
        lesson: "Lesson",
        sameWeeks:
            "Are Upper and Lower weeks the same?",
        yes: "Yes",
        no: "No",
        timesPerWeek:
            "Times per week",
        upperTimes:
            "Upper week times",
        lowerTimes:
            "Lower week times",
        edit: "Edit",
        delete: "Delete",
        add: "Add",
        save: "Save",
        cancel: "Cancel",
        continue: "Continue",
        selectTimes:
            "Select lesson times",
        confirmDelete:
            "Are you sure you want to delete this lesson?",
        days: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
        ]
    },

    ru: {
        shift: "Смена",
        morning: "Утренняя",
        afternoon: "Дневная",
        week: "Неделя",
        bothWeeks:
            "Верхняя + Нижняя",
        upperWeek:
            "Верхняя неделя",
        lowerWeek:
            "Нижняя неделя",
        generate: "Создать",
        clear: "Очистить",
        print: "Печать",
        schedule: "Расписание",
        empty:
            "Расписание появится здесь",
        emptyDescription:
            "Добавьте занятие, чтобы создать расписание.",
        lessonNameRequired:
            "Пожалуйста, введите название занятия.",
        scheduleRequired:
            "Пожалуйста, выберите время для всех занятий.",
        addLesson:
            "Добавить занятие",
        editLesson:
            "Изменить занятие",
        lessonName:
            "Название занятия",
        teacher:
            "Преподаватель",
        room:
            "Аудитория",
        roomLabel:
            "Аудитория:",
        time:
            "Время",
        day:
            "День",
        lesson:
            "Занятие",
        sameWeeks:
            "Верхняя и Нижняя недели одинаковые?",
        yes: "Да",
        no: "Нет",
        timesPerWeek:
            "Раз в неделю",
        upperTimes:
            "Верхняя неделя",
        lowerTimes:
            "Нижняя неделя",
        edit:
            "Изменить",
        delete:
            "Удалить",
        add:
            "Добавить",
        save:
            "Сохранить",
        cancel:
            "Отмена",
        continue:
            "Продолжить",
        selectTimes:
            "Выберите время занятий",
        confirmDelete:
            "Вы уверены, что хотите удалить это занятие?",
        days: [
            "Понедельник",
            "Вторник",
            "Среда",
            "Четверг",
            "Пятница",
            "Суббота"
        ]
    }
};


const dayKeys = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday"
];


const times = {
    morning: [
        "09:00–10:20",
        "10:30–11:50",
        "12:00–13:20"
    ],

    afternoon: [
        "13:40–15:00",
        "15:10–16:30",
        "16:40–18:00"
    ]
};


let lessons = [];
let editingLessonIndex = null;


const shiftSelect =
    document.getElementById("shift");

const weekModeSelect =
    document.getElementById("weekMode");

const sameWeeks =
    document.getElementById("sameWeeks");

const sameWeekCount =
    document.getElementById("sameWeekCount");

const sameCount =
    document.getElementById("sameCount");

const differentWeekCounts =
    document.getElementById(
        "differentWeekCounts"
    );

const upperCount =
    document.getElementById("upperCount");

const lowerCount =
    document.getElementById("lowerCount");

const continueLesson =
    document.getElementById(
        "continueLesson"
    );

const cancelEdit =
    document.getElementById("cancelEdit");

const lessonSchedule =
    document.getElementById(
        "lessonSchedule"
    );

const lessonName =
    document.getElementById("lessonName");

const lessonTeacher =
    document.getElementById(
        "lessonTeacher"
    );

const lessonRoom =
    document.getElementById("lessonRoom");

const themeToggle =
    document.getElementById(
        "themeToggle"
    );

const languageSelect =
    document.getElementById(
        "language"
    );

const lessonFormTitle =
    document.getElementById(
        "lessonFormTitle"
    );


function getText(key) {
    const language =
        languageSelect
            ? languageSelect.value
            : "az";

    const dictionary =
        translations[language] ||
        translations.az;

    return dictionary[key] || key;
}


function getDays() {
    const language =
        languageSelect
            ? languageSelect.value
            : "az";

    return (
        translations[language]?.days ||
        translations.az.days
    );
}


function getDayName(dayKey) {
    const index =
        dayKeys.indexOf(dayKey);

    const days =
        getDays();

    return (
        days[index] ||
        dayKey
    );
}


function getDayKey(day) {
    if (!day) {
        return "";
    }

    if (
        dayKeys.includes(day)
    ) {
        return day;
    }

    const normalized =
        day
            .toLowerCase()
            .trim()
            .replace(
                /ə/g,
                "e"
            )
            .replace(
                /ç/g,
                "c"
            )
            .replace(
                /ş/g,
                "s"
            )
            .replace(
                /ı/g,
                "i"
            )
            .replace(
                /ö/g,
                "o"
            )
            .replace(
                /ü/g,
                "u"
            )
            .replace(
                /ğ/g,
                "g"
            );

    const map = {
        "bazar ertesi":
            "monday",

        "cersenbe axsami":
            "tuesday",

        "cersenbe":
            "wednesday",

        "cume axsami":
            "thursday",

        "cume":
            "friday",

        "senbe":
            "saturday",

        "monday":
            "monday",

        "tuesday":
            "tuesday",

        "wednesday":
            "wednesday",

        "thursday":
            "thursday",

        "friday":
            "friday",

        "saturday":
            "saturday",

        "ponedelnik":
            "monday",

        "vtornik":
            "tuesday",

        "sreda":
            "wednesday",

        "chetverg":
            "thursday",

        "pyatnitsa":
            "friday",

        "subbota":
            "saturday"
    };

    return (
        map[normalized] ||
        ""
    );
}


function normalizeDay(day) {
    return getDayKey(day);
}


function normalizeWeek(week) {
    if (!week) {
        return "normal";
    }

    const value =
        week
            .toLowerCase()
            .trim()
            .replace(
                /ə/g,
                "e"
            )
            .replace(
                /ü/g,
                "u"
            )
            .replace(
                /ı/g,
                "i"
            )
            .replace(
                /ş/g,
                "s"
            );

    if (
        value === "ust" ||
        value === "upper"
    ) {
        return "upper";
    }

    if (
        value === "alt" ||
        value === "lower"
    ) {
        return "lower";
    }

    return "normal";
}


function parsePipeLine(
    line,
    currentDay
) {
    const parts =
        line
            .split("|")
            .map(
                item =>
                    item.trim()
            )
            .filter(Boolean);

    if (!parts.length) {
        return null;
    }

    const number =
        parseInt(
            parts[0],
            10
        );

    if (
        !number ||
        number < 1
    ) {
        return null;
    }

    return {
        day:
            normalizeDay(
                currentDay
            ),
        number,
        subject:
            parts[1] || "",
        teacher:
            parts[2] || "",
        room:
            parts[3] || "",
        week:
            normalizeWeek(
                parts[4] || ""
            )
    };
}


function parseOldLine(
    line,
    currentDay
) {
    const match =
        line.match(
            /^(\d+)\.\s*(.*?)\s*(?:-\s*(.*?))?\s*(?:\[(upper|lower|üst|alt)\])?$/i
        );

    if (!match) {
        return null;
    }

    return {
        day:
            normalizeDay(
                currentDay
            ),
        number:
            parseInt(
                match[1],
                10
            ),
        subject:
            match[2] || "",
        teacher:
            match[3] || "",
        room: "",
        week:
            normalizeWeek(
                match[4] || ""
            )
    };
}


function parseText(text) {
    const result = [];

    const lines =
        text.split("\n");

    let currentDay = "";

    lines.forEach(
        rawLine => {

            const line =
                rawLine.trim();

            if (!line) {
                return;
            }

            const possibleDay =
                normalizeDay(
                    line
                );

            if (
                possibleDay
            ) {
                currentDay =
                    possibleDay;

                return;
            }

            if (!currentDay) {
                return;
            }

            let lesson = null;

            if (
                line.includes("|")
            ) {
                lesson =
                    parsePipeLine(
                        line,
                        currentDay
                    );
            } else {
                lesson =
                    parseOldLine(
                        line,
                        currentDay
                    );
            }

            if (
                lesson &&
                lesson.subject
            ) {
                result.push(
                    lesson
                );
            }
        }
    );

    return result;
}


function getScheduleTime(number) {
    const shift =
        shiftSelect.value;

    const index =
        Number(number) - 1;

    if (
        !times[shift] ||
        !times[shift][index]
    ) {
        return "";
    }

    return times[shift][index];
}


function lessonMatchesWeek(
    lesson,
    selectedWeek
) {
    if (
        selectedWeek ===
        "both"
    ) {
        return true;
    }

    if (
        lesson.week ===
        "normal"
    ) {
        return true;
    }

    return (
        lesson.week ===
        selectedWeek
    );
}


function escapeHTML(value) {
    return String(value)
        .replace(
            /&/g,
            "&amp;"
        )
        .replace(
            /</g,
            "&lt;"
        )
        .replace(
            />/g,
            "&gt;"
        )
        .replace(
            /"/g,
            "&quot;"
        )
        .replace(
            /'/g,
            "&#039;"
        );
}


function createLessonHTML(
    lesson,
    showWeek = true
) {
    const lessonIndex =
        lessons.indexOf(
            lesson
        );

    let html = `
        <div
            class="lesson"
            data-lesson-index="${lessonIndex}"
        >

            <button
                type="button"
                class="lesson-menu-button"
                onclick="toggleLessonMenu(event, ${lessonIndex})"
                aria-label="Menu"
            >
                ⋯
            </button>

            <div
                class="lesson-menu"
                id="lesson-menu-${lessonIndex}"
                style="display: none;"
            >

                <button
                    type="button"
                    class="lesson-menu-edit"
                    onclick="editLesson(event, ${lessonIndex})"
                >
                    ${getText("edit")}
                </button>

                <button
                    type="button"
                    class="lesson-menu-delete"
                    onclick="deleteLesson(event, ${lessonIndex})"
                >
                    ${getText("delete")}
                </button>

            </div>

            <div class="lesson-number">
                ${lesson.number}
            </div>

            <div class="lesson-subject">
                ${escapeHTML(
        lesson.subject
    )}
            </div>
    `;

    if (lesson.teacher) {
        html += `
            <div class="lesson-teacher">
                ${escapeHTML(
            lesson.teacher
        )}
            </div>
        `;
    }

    if (lesson.room) {
        html += `
            <div class="lesson-room">
                ${getText("roomLabel")}
                ${escapeHTML(
            lesson.room
        )}
            </div>
        `;
    }

    if (
        showWeek &&
        lesson.week !== "normal"
    ) {
        html += `
            <div class="lesson-week">
                ${
            lesson.week ===
            "upper"
                ? getText(
                    "upperWeek"
                )
                : getText(
                    "lowerWeek"
                )
        }
            </div>
        `;
    }

    html += `
        </div>
    `;

    return html;
}


function groupLessonsForCell(
    cellLessons
) {
    const result = [];

    const normalLessons =
        cellLessons.filter(
            lesson =>
                lesson.week ===
                "normal"
        );

    const upperLessons =
        cellLessons.filter(
            lesson =>
                lesson.week ===
                "upper"
        );

    const lowerLessons =
        cellLessons.filter(
            lesson =>
                lesson.week ===
                "lower"
        );

    normalLessons.forEach(
        lesson => {
            result.push({
                type: "single",
                lesson
            });
        }
    );

    const usedLower =
        new Set();

    upperLessons.forEach(
        upperLesson => {

            const matchingLowerIndex =
                lowerLessons.findIndex(
                    (
                        lowerLesson,
                        index
                    ) => {

                        if (
                            usedLower.has(
                                index
                            )
                        ) {
                            return false;
                        }

                        return (
                            lowerLesson.subject
                                .trim()
                                .toLowerCase() ===
                            upperLesson.subject
                                .trim()
                                .toLowerCase()
                        );
                    }
                );

            if (
                matchingLowerIndex !==
                -1
            ) {
                const lowerLesson =
                    lowerLessons[
                        matchingLowerIndex
                        ];

                usedLower.add(
                    matchingLowerIndex
                );

                result.push({
                    type: "same",
                    upperLesson,
                    lowerLesson
                });

                return;
            }

            result.push({
                type: "upper",
                lesson:
                upperLesson
            });
        }
    );

    lowerLessons.forEach(
        (
            lowerLesson,
            lowerIndex
        ) => {

            if (
                usedLower.has(
                    lowerIndex
                )
            ) {
                return;
            }

            result.push({
                type: "lower",
                lesson:
                lowerLesson
            });
        }
    );

    return result;
}


function createGroupedLessonsHTML(
    cellLessons
) {
    const grouped =
        groupLessonsForCell(
            cellLessons
        );

    let html = "";

    grouped.forEach(
        item => {

            if (
                item.type ===
                "same"
            ) {
                const upperIndex =
                    lessons.indexOf(
                        item.upperLesson
                    );

                const lowerIndex =
                    lessons.indexOf(
                        item.lowerLesson
                    );

                html += `
                    <div
                        class="lesson merged-lesson"
                        data-upper-index="${upperIndex}"
                        data-lower-index="${lowerIndex}"
                    >

                        <button
                            type="button"
                            class="lesson-menu-button"
                            onclick="toggleMergedLessonMenu(event, ${upperIndex}, ${lowerIndex})"
                            aria-label="Menu"
                        >
                            ⋯
                        </button>

                        <div
                            class="lesson-menu"
                            id="merged-menu-${upperIndex}-${lowerIndex}"
                            style="display: none;"
                        >

                            <button
                                type="button"
                                onclick="editMergedLesson(event, ${upperIndex}, ${lowerIndex})"
                            >
                                ${getText(
                    "edit"
                )}
                            </button>

                            <button
                                type="button"
                                onclick="deleteMergedLesson(event, ${upperIndex}, ${lowerIndex})"
                            >
                                ${getText(
                    "delete"
                )}
                            </button>

                        </div>

                        <div class="lesson-number">
                            ${item.upperLesson.number}
                        </div>

                        <div class="lesson-subject">
                            ${escapeHTML(
                    item.upperLesson
                        .subject
                )}
                        </div>

                        ${
                    item.upperLesson
                        .teacher
                        ? `
                                    <div class="lesson-teacher">
                                        ${escapeHTML(
                            item
                                .upperLesson
                                .teacher
                        )}
                                    </div>
                                `
                        : ""
                }

                        ${
                    item.upperLesson
                        .room
                        ? `
                                    <div class="lesson-room">
                                        ${getText(
                            "roomLabel"
                        )}
                                        ${escapeHTML(
                            item
                                .upperLesson
                                .room
                        )}
                                    </div>
                                `
                        : ""
                }

                        <div class="lesson-week">
                            ${getText(
                    "bothWeeks"
                )}
                        </div>

                    </div>
                `;

                return;
            }

            if (
                item.type ===
                "single"
            ) {
                html +=
                    createLessonHTML(
                        item.lesson,
                        false
                    );

                return;
            }

            if (
                item.type === "upper" ||
                item.type === "lower"
            ) {
                if (html) {
                    html += `
                        <div class="lesson-divider"></div>
                    `;
                }

                html +=
                    createLessonHTML(
                        item.lesson,
                        true
                    );
            }
        }
    );

    return html;
}


function toggleMergedLessonMenu(
    event,
    upperIndex,
    lowerIndex
) {
    event.stopPropagation();

    document
        .querySelectorAll(
            ".lesson-menu"
        )
        .forEach(menu => {
            menu.style.display =
                "none";
        });

    const menu =
        document.getElementById(
            `merged-menu-${upperIndex}-${lowerIndex}`
        );

    if (!menu) {
        return;
    }

    menu.style.display =
        "block";
}


function editMergedLesson(
    event,
    upperIndex,
    lowerIndex
) {
    event.stopPropagation();

    const upperLesson =
        lessons[upperIndex];

    const lowerLesson =
        lessons[lowerIndex];

    if (
        !upperLesson ||
        !lowerLesson
    ) {
        return;
    }

    document
        .querySelectorAll(
            ".lesson-menu"
        )
        .forEach(menu => {
            menu.style.display =
                "none";
        });

    lessonName.value =
        upperLesson.subject;

    lessonTeacher.value =
        upperLesson.teacher || "";

    lessonRoom.value =
        upperLesson.room || "";

    sameWeeks.value =
        "yes";

    sameCount.value =
        "1";

    editingLessonIndex =
        upperIndex;

    startEditMode();

    sameWeeks.dispatchEvent(
        new Event("change")
    );

    createLessonSchedule(
        upperLesson
    );

    lessonSchedule.dataset
        .mergedUpperIndex =
        upperIndex;

    lessonSchedule.dataset
        .mergedLowerIndex =
        lowerIndex;

    lessonSchedule.dataset
        .mergedEdit =
        "true";

    lessonName.focus();
}


function deleteMergedLesson(
    event,
    upperIndex,
    lowerIndex
) {
    event.stopPropagation();

    const confirmed =
        window.confirm(
            getText(
                "confirmDelete"
            )
        );

    if (!confirmed) {
        return;
    }

    const indexes = [
        upperIndex,
        lowerIndex
    ].sort(
        (a, b) => b - a
    );

    indexes.forEach(
        index => {

            if (
                index >= 0 &&
                index < lessons.length
            ) {
                lessons.splice(
                    index,
                    1
                );
            }
        }
    );

    finishEdit();

    generateTimetable();
}


function generateTimetable() {
    const timetable =
        document.getElementById(
            "timetable"
        );

    if (!timetable) {
        return;
    }

    const selectedWeek =
        weekModeSelect.value;

    const shift =
        shiftSelect.value;

    const activeTimes =
        times[shift] || [];

    if (!lessons.length) {
        timetable.innerHTML = `
            <div class="empty-state">

                <div class="empty-state-title">
                    ${getText("empty")}
                </div>

                <div class="empty-state-text">
                    ${getText(
            "emptyDescription"
        )}
                </div>

            </div>
        `;

        return;
    }

    const data = {};

    lessons.forEach(
        lesson => {

            if (
                !lessonMatchesWeek(
                    lesson,
                    selectedWeek
                )
            ) {
                return;
            }

            const day =
                normalizeDay(
                    lesson.day
                );

            const number =
                Number(
                    lesson.number
                );

            if (
                !day ||
                !number
            ) {
                return;
            }

            const key =
                `${day}-${number}`;

            if (!data[key]) {
                data[key] = [];
            }

            data[key].push(
                lesson
            );
        }
    );

    let html = `
        <table class="timetable">

            <thead>

                <tr>

                    <th class="time-cell">
                        ${getText("time")}
                    </th>
    `;

    dayKeys.forEach(
        dayKey => {

            html += `
                <th>
                    ${getDayName(
                dayKey
            )}
                </th>
            `;
        }
    );

    html += `
                </tr>

            </thead>

            <tbody>
    `;

    activeTimes.forEach(
        (
            time,
            index
        ) => {

            const number =
                index + 1;

            html += `
                <tr>

                    <td class="time-cell">
                        ${time}
                    </td>
            `;

            dayKeys.forEach(
                dayKey => {

                    const key =
                        `${dayKey}-${number}`;

                    const cellLessons =
                        data[key] || [];

                    html += `
                        <td>
                    `;

                    if (
                        cellLessons.length
                    ) {
                        html +=
                            createGroupedLessonsHTML(
                                cellLessons
                            );
                    }

                    html += `
                        </td>
                    `;
                }
            );

            html += `
                </tr>
            `;
        }
    );

    html += `
            </tbody>

        </table>
    `;

    timetable.innerHTML =
        html;
}


function createScheduleRow(
    title,
    week,
    existingLesson = null
) {
    const row =
        document.createElement(
            "div"
        );

    row.className =
        "schedule-row";

    row.dataset.week =
        week;

    const currentTimes =
        times[
            shiftSelect.value
            ] || [];

    let options = "";

    currentTimes.forEach(
        (
            time,
            index
        ) => {

            const number =
                index + 1;

            options += `
                <option value="${number}">
                    ${number} — ${time}
                </option>
            `;
        }
    );

    const currentDays =
        getDays();

    row.innerHTML = `
        <div class="schedule-row-title">
            ${title}
        </div>

        <div class="schedule-fields">

            <div class="form-field">

                <label>
                    ${getText("day")}
                </label>

                <select class="schedule-day">

                    ${currentDays
        .map(
            (
                dayName,
                index
            ) => `
                                <option value="${dayKeys[index]}">
                                    ${dayName}
                                </option>
                            `
        )
        .join("")}

                </select>

            </div>

            <div class="form-field">

                <label>
                    ${getText("lesson")}
                </label>

                <select class="schedule-number">
                    ${options}
                </select>

            </div>

        </div>
    `;

    if (existingLesson) {
        const daySelect =
            row.querySelector(
                ".schedule-day"
            );

        const numberSelect =
            row.querySelector(
                ".schedule-number"
            );

        if (daySelect) {
            daySelect.value =
                normalizeDay(
                    existingLesson.day
                );
        }

        if (numberSelect) {
            numberSelect.value =
                existingLesson.number;
        }
    }

    return row;
}


function createLessonSchedule(
    existingLesson = null
) {
    if (!lessonSchedule) {
        return;
    }

    lessonSchedule.innerHTML =
        "";

    const same =
        sameWeeks.value ===
        "yes";

    if (same) {
        const count =
            Number(
                sameCount.value
            );

        const heading =
            document.createElement(
                "div"
            );

        heading.className =
            "schedule-heading";

        heading.textContent =
            getText(
                "selectTimes"
            );

        lessonSchedule.appendChild(
            heading
        );

        for (
            let i = 0;
            i < count;
            i++
        ) {
            const row =
                createScheduleRow(
                    `${i + 1}. ${getText(
                        "lesson"
                    )}`,
                    "normal",
                    existingLesson &&
                    existingLesson.week ===
                    "normal" &&
                    i === 0
                        ? existingLesson
                        : null
                );

            lessonSchedule.appendChild(
                row
            );
        }
    } else {
        const upper =
            Number(
                upperCount.value
            );

        const lower =
            Number(
                lowerCount.value
            );

        if (upper > 0) {
            const upperHeading =
                document.createElement(
                    "div"
                );

            upperHeading.className =
                "schedule-heading";

            upperHeading.textContent =
                getText(
                    "upperWeek"
                );

            lessonSchedule.appendChild(
                upperHeading
            );

            for (
                let i = 0;
                i < upper;
                i++
            ) {
                const row =
                    createScheduleRow(
                        `${i + 1}. ${getText(
                            "lesson"
                        )}`,
                        "upper",
                        existingLesson &&
                        existingLesson.week ===
                        "upper" &&
                        i === 0
                            ? existingLesson
                            : null
                    );

                lessonSchedule.appendChild(
                    row
                );
            }
        }

        if (lower > 0) {
            const lowerHeading =
                document.createElement(
                    "div"
                );

            lowerHeading.className =
                "schedule-heading lower-heading";

            lowerHeading.textContent =
                getText(
                    "lowerWeek"
                );

            lessonSchedule.appendChild(
                lowerHeading
            );

            for (
                let i = 0;
                i < lower;
                i++
            ) {
                const row =
                    createScheduleRow(
                        `${i + 1}. ${getText(
                            "lesson"
                        )}`,
                        "lower",
                        existingLesson &&
                        existingLesson.week ===
                        "lower" &&
                        i === 0
                            ? existingLesson
                            : null
                    );

                lessonSchedule.appendChild(
                    row
                );
            }
        }
    }

    const actionButton =
        document.createElement(
            "button"
        );

    actionButton.type =
        "button";

    actionButton.className =
        "continue-button";

    actionButton.textContent =
        editingLessonIndex !== null
            ? getText("save")
            : getText("add");

    actionButton.style.marginTop =
        "14px";

    actionButton.addEventListener(
        "click",
        addLessonToSchedule
    );

    lessonSchedule.appendChild(
        actionButton
    );

    lessonSchedule.style.display =
        "block";
}


function addLessonToSchedule() {
    const name =
        lessonName.value.trim();

    if (!name) {
        alert(
            getText(
                "lessonNameRequired"
            )
        );

        lessonName.focus();

        return;
    }

    const teacher =
        lessonTeacher.value.trim();

    const room =
        lessonRoom.value.trim();

    const rows =
        lessonSchedule.querySelectorAll(
            ".schedule-row"
        );

    const newLessons = [];
    let invalidRow = null;

    rows.forEach(
        row => {

            const daySelect =
                row.querySelector(
                    ".schedule-day"
                );

            const numberSelect =
                row.querySelector(
                    ".schedule-number"
                );

            if (
                !daySelect ||
                !numberSelect
            ) {
                return;
            }

            if (
                !daySelect.value ||
                !numberSelect.value
            ) {
                invalidRow = row;
                return;
            }

            newLessons.push({
                subject: name,
                teacher,
                room,
                day: normalizeDay(
                    daySelect.value
                ),
                number: Number(
                    numberSelect.value
                ),
                week:
                    row.dataset.week ||
                    "normal"
            });
        }
    );

    if (invalidRow) {
        alert(
            getText(
                "scheduleRequired"
            )
        );

        const firstSelect =
            invalidRow.querySelector(
                "select"
            );

        if (firstSelect) {
            firstSelect.focus();
        }

        return;
    }

    if (!newLessons.length) {
        alert(
            getText(
                "scheduleRequired"
            )
        );

        return;
    }

    if (
        lessonSchedule.dataset
            .mergedEdit ===
        "true"
    ) {
        const upperIndex =
            Number(
                lessonSchedule.dataset
                    .mergedUpperIndex
            );

        const lowerIndex =
            Number(
                lessonSchedule.dataset
                    .mergedLowerIndex
            );

        const oldLowerLesson =
            lessons[lowerIndex];

        const newLesson =
            newLessons[0];

        if (
            newLesson &&
            oldLowerLesson
        ) {
            lessons[upperIndex] = {
                ...newLesson,
                week: "upper"
            };

            lessons[lowerIndex] = {
                ...oldLowerLesson,
                subject:
                newLesson.subject
            };
        }

        delete lessonSchedule
            .dataset
            .mergedEdit;

        delete lessonSchedule
            .dataset
            .mergedUpperIndex;

        delete lessonSchedule
            .dataset
            .mergedLowerIndex;

        finishEdit();

        generateTimetable();

        return;
    }

    if (
        editingLessonIndex !== null
    ) {
        const index =
            editingLessonIndex;

        if (
            index >= 0 &&
            index < lessons.length
        ) {
            lessons.splice(
                index,
                1,
                ...newLessons
            );
        }

        editingLessonIndex =
            null;
    } else {
        lessons.push(
            ...newLessons
        );
    }

    finishEdit();

    generateTimetable();
}


function startEditMode() {
    if (lessonFormTitle) {
        lessonFormTitle.textContent =
            getText(
                "editLesson"
            );
    }

    if (continueLesson) {
        continueLesson.textContent =
            getText(
                "continue"
            );
    }

    if (cancelEdit) {
        cancelEdit.style.display =
            "block";
    }
}


function finishEdit() {
    editingLessonIndex =
        null;

    lessonName.value = "";
    lessonTeacher.value = "";
    lessonRoom.value = "";

    lessonSchedule.innerHTML =
        "";

    lessonSchedule.style.display =
        "none";

    delete lessonSchedule
        .dataset
        .mergedEdit;

    delete lessonSchedule
        .dataset
        .mergedUpperIndex;

    delete lessonSchedule
        .dataset
        .mergedLowerIndex;

    if (lessonFormTitle) {
        lessonFormTitle.textContent =
            getText(
                "addLesson"
            );
    }

    if (continueLesson) {
        continueLesson.textContent =
            getText(
                "continue"
            );
    }

    if (cancelEdit) {
        cancelEdit.style.display =
            "none";
    }

    sameWeeks.value =
        "yes";

    sameCount.value =
        "1";

    upperCount.value =
        "0";

    lowerCount.value =
        "0";

    sameWeeks.dispatchEvent(
        new Event("change")
    );
}


function cancelLessonEdit() {
    finishEdit();
}


function toggleLessonMenu(
    event,
    index
) {
    event.stopPropagation();

    document
        .querySelectorAll(
            ".lesson-menu"
        )
        .forEach(
            menu => {

                if (
                    menu.id !==
                    `lesson-menu-${index}`
                ) {
                    menu.style.display =
                        "none";
                }
            }
        );

    const menu =
        document.getElementById(
            `lesson-menu-${index}`
        );

    if (!menu) {
        return;
    }

    menu.style.display =
        menu.style.display ===
        "none"
            ? "block"
            : "none";
}


function deleteLesson(
    event,
    index
) {
    event.stopPropagation();

    if (
        index < 0 ||
        index >= lessons.length
    ) {
        return;
    }

    const confirmed =
        window.confirm(
            getText(
                "confirmDelete"
            )
        );

    if (!confirmed) {
        return;
    }

    lessons.splice(
        index,
        1
    );

    if (
        editingLessonIndex ===
        index
    ) {
        finishEdit();
    }

    generateTimetable();
}


function editLesson(
    event,
    index
) {
    event.stopPropagation();

    if (
        index < 0 ||
        index >= lessons.length
    ) {
        return;
    }

    const lesson =
        lessons[index];

    editingLessonIndex =
        index;

    lessonName.value =
        lesson.subject;

    lessonTeacher.value =
        lesson.teacher || "";

    lessonRoom.value =
        lesson.room || "";

    if (
        lesson.week ===
        "normal"
    ) {
        sameWeeks.value =
            "yes";

        sameCount.value =
            "1";
    } else {
        sameWeeks.value =
            "no";

        if (
            lesson.week ===
            "upper"
        ) {
            upperCount.value =
                "1";

            lowerCount.value =
                "0";
        }

        if (
            lesson.week ===
            "lower"
        ) {
            upperCount.value =
                "0";

            lowerCount.value =
                "1";
        }
    }

    sameWeeks.dispatchEvent(
        new Event("change")
    );

    startEditMode();

    createLessonSchedule(
        lesson
    );

    document
        .querySelectorAll(
            ".lesson-menu"
        )
        .forEach(
            menu => {
                menu.style.display =
                    "none";
            }
        );

    lessonName.focus();
}


function clearAll() {
    if (
        lessons.length === 0
    ) {
        return;
    }

    if (
        !confirm(
            getText(
                "confirmDelete"
            )
        )
    ) {
        return;
    }

    lessons = [];

    finishEdit();

    generateTimetable();
}


function updateLanguage() {
    const language =
        languageSelect.value;

    document.documentElement.lang =
        language;

    const dictionary =
        translations[language] ||
        translations.az;

    document
        .querySelectorAll(
            "[data-i18n]"
        )
        .forEach(
            element => {

                const key =
                    element.dataset
                        .i18n;

                if (
                    dictionary[key]
                ) {
                    element.textContent =
                        dictionary[key];
                }
            }
        );

    document
        .querySelectorAll(
            "[data-i18n-placeholder]"
        )
        .forEach(
            element => {

                const key =
                    element.dataset
                        .i18nPlaceholder;

                if (
                    dictionary[key]
                ) {
                    element.placeholder =
                        dictionary[key];
                }
            }
        );

    if (
        editingLessonIndex !==
        null
    ) {
        startEditMode();

        createLessonSchedule(
            lessons[
                editingLessonIndex
                ]
        );
    }

    generateTimetable();
}


function updateTheme() {
    const dark =
        localStorage.getItem(
            "scheduled-theme"
        ) === "dark";

    document.body.classList.toggle(
        "dark",
        dark
    );
}


function toggleTheme() {
    const isDark =
        document.body.classList.contains(
            "dark"
        );

    document.body.classList.toggle(
        "dark",
        !isDark
    );

    localStorage.setItem(
        "scheduled-theme",
        !isDark
            ? "dark"
            : "light"
    );
}


function exportPNG() {
    exportTimetable("png");
}

function exportJPG() {
    exportTimetable("jpg");
}

function exportTimetable(format) {
    const timetableContainer =
        document.getElementById("timetable");

    const table =
        timetableContainer?.querySelector(".timetable");

    if (!table) {
        alert("Əvvəlcə cədvəli yaradın.");
        return;
    }

    if (typeof html2canvas === "undefined") {
        alert("Export sistemi yüklənmədi.");
        return;
    }

    const originalWidth =
        table.style.width;

    const originalMinWidth =
        table.style.minWidth;

    const originalHeight =
        table.style.height;

    const originalOverflow =
        timetableContainer.style.overflow;

    timetableContainer.classList.add(
        "exporting"
    );

    table.style.width =
        `${table.scrollWidth}px`;

    table.style.minWidth =
        `${table.scrollWidth}px`;

    table.style.height =
        "auto";

    timetableContainer.style.overflow =
        "visible";

    html2canvas(table, {
        backgroundColor: "#ffffff",
        scale: 2,
        useCORS: true,
        allowTaint: false,
        logging: false,
        width: table.scrollWidth,
        height: table.scrollHeight,
        windowWidth: table.scrollWidth,
        windowHeight: table.scrollHeight
    })
        .then(canvas => {

            const mimeType =
                format === "png"
                    ? "image/png"
                    : "image/jpeg";

            const extension =
                format === "png"
                    ? "png"
                    : "jpg";

            const filename =
                `schedulexd.${extension}`;

            canvas.toBlob(
                blob => {

                    if (!blob) {
                        alert(
                            "Fayl yaratmaq mümkün olmadı."
                        );
                        return;
                    }

                    const url =
                        URL.createObjectURL(blob);

                    const link =
                        document.createElement("a");

                    link.href = url;

                    link.download =
                        filename;

                    document.body.appendChild(
                        link
                    );

                    link.click();

                    link.remove();

                    setTimeout(() => {
                        URL.revokeObjectURL(url);
                    }, 1000);

                },
                mimeType,
                format === "jpg"
                    ? 0.95
                    : undefined
            );
        })
        .catch(error => {

            console.error(
                "Export error:",
                error
            );

            alert(
                "Cədvəli export etmək mümkün olmadı."
            );

        })
        .finally(() => {

            table.style.width =
                originalWidth;

            table.style.minWidth =
                originalMinWidth;

            table.style.height =
                originalHeight;

            timetableContainer.style.overflow =
                originalOverflow;

            timetableContainer.classList.remove(
                "exporting"
            );
        });
}


/* EVENT LISTENERS */

if (sameWeeks) {
    sameWeeks.addEventListener(
        "change",
        () => {

            if (
                sameWeeks.value ===
                "yes"
            ) {
                sameWeekCount.style.display =
                    "flex";

                differentWeekCounts.style.display =
                    "none";
            } else {
                sameWeekCount.style.display =
                    "none";

                differentWeekCounts.style.display =
                    "flex";
            }
        }
    );
}


if (continueLesson) {
    continueLesson.addEventListener(
        "click",
        () => {

            const name =
                lessonName.value.trim();

            if (!name) {
                alert(
                    getText(
                        "lessonNameRequired"
                    )
                );

                lessonName.focus();

                return;
            }

            if (
                sameWeeks.value ===
                "no"
            ) {
                const upper =
                    Number(
                        upperCount.value
                    );

                const lower =
                    Number(
                        lowerCount.value
                    );

                if (
                    upper === 0 &&
                    lower === 0
                ) {
                    alert(
                        getText(
                            "scheduleRequired"
                        )
                    );

                    return;
                }
            }

            createLessonSchedule();
        }
    );
}


if (cancelEdit) {
    cancelEdit.addEventListener(
        "click",
        cancelLessonEdit
    );
}


if (shiftSelect) {
    shiftSelect.addEventListener(
        "change",
        () => {
            generateTimetable();
        }
    );
}


if (weekModeSelect) {
    weekModeSelect.addEventListener(
        "change",
        () => {
            generateTimetable();
        }
    );
}


if (themeToggle) {
    themeToggle.addEventListener(
        "click",
        toggleTheme
    );
}


if (languageSelect) {
    languageSelect.addEventListener(
        "change",
        updateLanguage
    );
}


document.addEventListener(
    "click",
    () => {

        document
            .querySelectorAll(
                ".lesson-menu"
            )
            .forEach(
                menu => {
                    menu.style.display =
                        "none";
                }
            );
    }
);


/* INITIALIZATION */

updateTheme();

updateLanguage();

generateTimetable();
