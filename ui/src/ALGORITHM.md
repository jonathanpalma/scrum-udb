- generateWorkableDays(monthQuantity: number): Array<moment.Moment>
  - params:
    - monthQuantity: number
  - returns: 
    - availableDates: Array<moment.Moment>

- function generateJobsByDay(day)
  - params:
    - day: moment.Moment
  - returns:
    - jobs: Array<Job>

- function getOperatorAvailabilityByDay(operator)
  - params:
    - operator: Operator
  - returns:
    - operatorAvailabilityByDay: OperatorAvailability

- function getWorkLoad(jobs, operators)
  - params:
    - jobs: Array<Job>
    - operators: Array<Operator>
  - definition:
    - jobQuantity = jobs.lenght()
    - operatorsAvailability = operators.map(operator => getOperatorAvailabilityByDay(operator))
    - availability: number
  - returns:
    - workLoad: number
      // positive -> jobQuantity >= availability // don't need to hire
      // negative -> jobQuantity < availability  // do need to hire

- function getAvailableSlots(day, operator)
  - params:
    - day: moment.Moment
    - operator: Operator
  - returns:
    - availableSlots: number // 0

- function calculateOperatorCategory(operator)
  - params:
    - operator: Operator
  - definition:
    - iterate over WorkQuality
  - returns:
    - category: number // from 1 ~ 5

- function assign(day, job, operator)
  - params:
    - day: moment.Moment
    - job: Job
    - operator: Operator
  - returns:
    - workLog: WorkLog

- function evaluate(workLog)
  - params:
    - workLog: WorkLog
  - definition:
    - getRandomEvaluator()
    - getRandomScore()
  - returns:
    - workQuality: WorkQuality

- function executeWorkDay(day, jobs, operators)
  - params:
    - day: moment.Moment
    - jobs: Array<Job>
    - operators: Array<Operator>
  - definition:
    - define lastAssignedOperatorIndex = -1 // last operator assigned
    - jobs.forEach()
      - isJobAssigned = false
      - sort desc operators by category

      - do
        - lastAssignedOperatorIndex++
        - conditional
          - if isActive and !isPunished and getAvailableSlots(operator) > 0
            - assign(day, job, operator): WorkLog
            - score = evaluate(workLog)
            - update operator category using calculateOperatorCategory()
            - conditional
              - if score === 1
                - conditional
                  - if operatorCategory <= 3
                    - operator.isActive = false
                    - operator.firedDate = day
                    - hire new operator
                  - else
                    - operator.isPunished = true
            - isJobAssigned = true
          - else
            - conditional
              - if isPunished
                isPunished = !isPunished
      - while(!isJobAssigned)

  - returns:
    - 

